import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-white heading2 mb-2">404 Page Not Found</h1>
      <Link
        to="/"
        className="text-white underline"
      >
        Zpět na domovskou stránku
      </Link>
    </div>
  );
};

export default NotFoundPage;
