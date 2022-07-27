import React from "react";

function Contacts() {
  return (
    <div className="container mx-auto">
      {/* Top */}
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-indigo-600 font-bold">CONTACTS</h1>
        <h1 className="text-3xl">Have Questions?</h1>
        <p className="w-1/2 text-center text-gray-400">
          Do you have an idea? Let's discuss it and see what we can do together.
        </p>
      </div>
      {/* Bottom */}
      <form
        method="POST"
        action="https://getform.io/f/0e04a135-a9f3-4179-a6c2-6edd0d23ae69"
        className="mt-5 p-8 flex flex-col gap-5 items-center"
        required
      >
        <input
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm"
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm"
          cols="30"
          rows="10"
          name="message"
          placeholder="Message..."
          required
        ></textarea>
        <button className="w-1/2 md:w-1/2 bg-indigo-600 text-white font-medium px-3 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contacts;
