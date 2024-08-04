import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Shorten = () => {
  const [value, setValue] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleValue = async (e) => {
    e.preventDefault();
    const trimmedValue = value.trim();

    if (trimmedValue === "") {
      // console.log("Toast Triggered");

      return toast.error("Please enter a valid URL");
    }

    try {
      const url = await axios.post("http://localhost:5000/url/give", {
        givenUrl: value,
      });
      toast.success("Shortened the URL successfully");
      setShortenedUrl(url.data.shortUid);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="">
          <h1 className="text-8xl font-bold mb-4">
            Shorten the <span className="text text-accent">Link</span>
          </h1>
        </div>
        <form
          action=""
          className="flex justify-center flex-col"
          onSubmit={handleValue}
        >
          <h3 className="text-xl mb-3">
            Enter the <span className="text text-accent">URL</span> you want to
            shorten
          </h3>
          <textarea
            name="providedUrl"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the url"
            className="textarea textarea-accent textarea-lg mb-4"
          ></textarea>
          <button className="btn btn-accent text-lg">Shorten</button>
        </form>

        <h3 className="text-xl mt-6 mb-3">
          Shortened <span className="text text-accent">URL</span>{" "}
        </h3>
        <input
          type="text"
          className="input input-accent mb-4"
          placeholder="Shortened URL"
          value={shortenedUrl}
          readOnly
        />
        <div className="flex gap-4 justify-center">
          <button
            className="btn btn-accent"
            onClick={() => {
              navigator.clipboard
                .writeText(shortenedUrl)
                .then(() => toast.success("Copied to clipboard"));
            }}
          >
            Copy Text
          </button>
        </div>
      </div>
    </>
  );
};

export const Expand = () => {
  const nav = useNavigate(); // for redirecting
  const [value, setValue] = useState("");
  const handleNavigate = async () => {
    try {
      const navUrl = await axios.post("http://localhost:5000/url/take", {
        shortUid: value,
      });
      window.open(navUrl.data.givenUrl, "_blank"); // open in new tab
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex gap-4 justify-center">
          <h1 className="text-8xl font-bold mb-4">
            Expand the <span className="text text-accent">Link</span>
          </h1>
        </div>

        <h3 className="text-xl mt-6 mb-3">
          Enter the <span className="text text-accent">URL</span> you want to
          expand
        </h3>
        <textarea
          name="providedUrl"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter the url"
          className="textarea textarea-accent textarea-lg mb-4"
        ></textarea>

        <button
          className="btn btn-accent text-2xl font-semibold"
          onClick={handleNavigate}
        >
          Redirect
        </button>
      </div>
    </div>
  );
};
