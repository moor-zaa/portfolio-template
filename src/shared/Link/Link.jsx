import Link from "next/link";
import React from "react";

const MyLink = ({ url, children }) => {
  return (
    <Link href={url} scroll={false}>
      {children}
    </Link>
  );
};

export default MyLink;
