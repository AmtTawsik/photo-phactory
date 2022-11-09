import React from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div>
      {/* page Title */}
      <Helmet>
        <title>Blogs-Photo Phactory</title>
      </Helmet>
      <h1 className="text-center mt-6 mb-2 text-5xl font-extrabold text-green-600">
        Blogs
      </h1>
      <hr />
      <div>
        {/* Blog-1 */}
        <div className="bg-teal-300 p-10 m-10 rounded-lg">
          <h1 className="text-2xl text-amber-600 font-extrabold">Blog-1</h1>
          <h5 className="text-xl text-cyan-800 font-bold">
            Difference between SQL and NoSQL
          </h5>
          <p className="font-mono font-bold text-fuchsia-800">
            SQL: SQL (pronounced "ess-que-el") stands for Structured Query
            Language. SQL is used to communicate with a database. According to
            ANSI (American National Standards Institute), it is the standard
            language for relational database management systems.SQL statements
            are used to perform tasks such as update data on a database, or
            retrieve data from a database. Some common relational database
            management systems that use SQL are: Oracle, Sybase, Microsoft SQL
            Server, Microsoft Access, Ingres, etc.
            <br /> <br />
            NoSQL: NoSQL databases (aka "not only SQL") are non-tabular
            databases and store data differently than relational tables. NoSQL
            databases come in a variety of types based on their data model. The
            main types are document, key-value, wide-column, and graph. They
            provide flexible schemas and scale easily with large amounts of data
            and high user loads.When people use the term “NoSQL database,” they
            typically use it to refer to any non-relational database. Some say
            the term “NoSQL” stands for “non SQL” while others say it stands for
            “not only SQL.” Either way, most agree that NoSQL databases are
            databases that store data in a format other than relational tables.
          </p>
        </div>

        {/* Blog-2 */}
        <div className="bg-teal-300 p-10 m-10 rounded-lg">
          <h1 className="text-2xl text-amber-600 font-extrabold">Blog-2</h1>
          <h5 className="text-xl text-cyan-800 font-bold">
            What is JWT, and how does it work?
          </h5>
          <p className="font-mono font-bold text-fuchsia-800">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.{" "}
            <br />
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key. <br />
            1.User sign-in using username and password or google/facebook.{" "}
            <br />
            2.Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. <br />
            3.User's Client uses the JWT to access protected resources by
            passing the JWT in HTTP Authorization header. <br />
            4.Resource server then verifies the authenticity of the token using
            the secret salt/ public key. <br />
          </p>
        </div>

        {/* Blog-3 */}
        <div className="bg-teal-300 p-10 m-10 rounded-lg">
          <h1 className="text-2xl text-amber-600 font-extrabold">Blog-3</h1>
          <h5 className="text-xl text-cyan-800 font-bold">
            What is the difference between javascript and NodeJS?
          </h5>
          <p className="font-mono font-bold text-fuchsia-800">
            JavaScript:JavaScript is a simple programming language that can be
            used with any browser that has the JavaScript Engine installed.
            Node. js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language. <br /> <br />
            NodeJS:NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
        </div>

        {/* Blog-4 */}
        <div className="bg-teal-300 p-10 m-10 rounded-lg">
          <h1 className="text-2xl text-amber-600 font-extrabold">Blog-4</h1>
          <h5 className="text-xl text-cyan-800 font-bold">
            How does Node JS handle multiple requests at the same time?
          </h5>
          <p className="font-mono font-bold text-fuchsia-800">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
