import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from 'models';
import { Table } from 'reactstrap';
import TableSection from 'table/tableSection';



function HomePage() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  async function getPosts() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    setPosts(data);
  }
  useEffect(() => {
    getPosts();
  }, [])
  return (
    <div>
      <TableSection posts={posts}/>
    </div>
  )
}

export default HomePage;