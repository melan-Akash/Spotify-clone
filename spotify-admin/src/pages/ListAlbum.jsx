import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListAlbum = () => {
  const [data, setData] = useState([]);

  // Backend එකෙන් ඇල්බම සියල්ල ලබාගන්නා API Call එක
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error("Error occurred");
    }
  }

  // ඇල්බමයක් මකා දැමීමේ API Call එක
  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbums(); // මකා දැමූ පසු නැවත ලැයිස්තුව update කිරීම
      }
    } catch (error) {
      toast.error("Error occurred");
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
              <img className="w-12" src={item.image} alt="album" />
              <p>{item.name}</p>
              <p>{item.description}</p>
              <input type="color" value={item.bgColor} readOnly />
              <p className="cursor-pointer font-bold text-lg" onClick={() => removeAlbum(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListAlbum