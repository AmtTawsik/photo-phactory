import React from "react";

const handleAddServic = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
        name,
        image,
        price,
        description,
    }
    console.log(service)
}

const AddService = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Add More Service
        </h1>
        <form onSubmit={handleAddServic} className="mt-6">

          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
            >
              Name of Service
            </label>
            <input
              name="name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
            >
              Image of Service
            </label>
            <input
              name="image"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
            >
              Price of Service
            </label>
            <input
                name="price"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label>
              <span className="text-gray-700">Description</span>
              <textarea
                name="description"
                className="
                block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
