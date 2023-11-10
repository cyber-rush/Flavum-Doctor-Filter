import React from "react";
import { useNavigate } from "react-router-dom";

export default function KnowledgeCentreCard({ item, index }) {
  const navigate = useNavigate();
  const kc = `${index + 1}`;
  return (
    <div
      onClick={() => navigate(kc)}
      className="w-full flex flex-col justify-between max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:shadow-primaryColor cursor-pointer transition-all ease-in"
    >
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-primaryColor rounded-full "
          alt="Testimonial avatar"
          src={item.image}
        />
      </div>
      <h2 className="mt-2 text-xl font-semibold heading md:mt-0">
        {item.title}
      </h2>
      <p className="mt-2 text-sm text-textColor h-max">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
        deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
        commodi hic, suscipit in a veritatis pariatur minus consequuntur! */}
        {item.description}
      </p>
      <div className="flex justify-between mt-4">
        <p className="text-textColor font-bold">{item.questions} questions</p>
        <a
          href="#"
          className="text-lg font-medium text-blue-600"
          tabIndex={0}
          role="link"
        >
          Know more...
        </a>
      </div>
    </div>
  );
}
