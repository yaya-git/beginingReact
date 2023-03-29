import React from 'react'

export default function NoTodos() {
  return (
    <div className="no-todos-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <line
      x1="96"
      y1="156"
      x2="160"
      y2="156"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <line
      x1="96"
      y1="116"
      x2="160"
      y2="116"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <path
      d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <path
      d="M88,72V64a40,40,0,0,1,80,0v8Z"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
  </svg>
  <p>Add some todos ...</p>
</div>
  );
}

