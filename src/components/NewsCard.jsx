import React from "react";
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        rating,
        total_view,
        thumbnail_url,
        details,
        tags,
    } = news;

    return (
        <div className="bg-base-100 shadow-md rounded-2xl overflow-hidden border border-gray-200">
            {/* Author Section */}
            <div className="flex bg-gray-100 items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author?.name}</h3>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author?.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-600">
                    <FaBookmark className="cursor-pointer hover:text-blue-600 text-xl" />
                    <FaShareAlt className="cursor-pointer hover:text-blue-600 text-xl" />
                </div>
            </div>

            {/* Title */}
            <h2 className="px-4 text-xl my-2 font-semibold text-gray-900">
                {title}
            </h2>

            {/* Thumbnail */}
            <figure className="mt-3 px-4">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full rounded-md h-60 object-cover"
                />
            </figure>

            {/* Details */}
            <div className="p-4 text-gray-700 text-sm leading-relaxed">
                {details.length > 200 ? (
                    <>
                        {details.slice(0, 200)}...{" "}
                        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                            Read More
                        </span>
                    </>
                ) : (
                    details
                )}
            </div>

            {/* Footer */}
            <div className="flex items-center mt-1.5 justify-between px-4 py-3 border-t border-gray-200">
                <div className="flex items-center text-orange-500">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-700">{rating.number.toFixed(1)}</span>
                </div>

                <div className="flex items-center text-gray-600 font-semibold gap-3">
                    <FaEye className="text-xl"/>
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
