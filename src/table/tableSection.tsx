import React from "react";
import { Table, Card, CardBody } from "reactstrap";
import { Post } from "../models";

interface TableSectionProps {
  posts: Post[] | null;
}

function TableSection({ posts }: TableSectionProps) {
  return (
    <div className="mt-2">
      <Card>
        <CardBody className="px-0 pt-0">
          <Table>
            <thead className="bg-info text-dark">
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {posts &&
                posts.map((post, index) => (
                  <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default TableSection;
