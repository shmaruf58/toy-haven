
const Blog = () => {
  return (
    <div className="bg-base-200 pb-16">
      <div>
        <div className="container  mx-auto">
          <h1 className="text-4xl font-bold text-center pt-16 ">
            Quiz?
          </h1>

          <div className="pb-10 px-5">
            <h1 className="text-2xl pt-10 font-bold">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="mt-5 text-xl">
              <span className="font-semibold text-xl text-purple-800">Answer : </span>
              An access token is a credential that grants access to protected
              resources. A refresh token is used to obtain a new access token
              when the current one expires. In ReactJS, access tokens are
              typically stored in the browsers local storage or session storage,
              while refresh tokens should be securely stored in an HTTP-only
              cookie for improved security and protection against cross-site
              scripting (XSS) attacks.
            </p>

            <h1 className="text-2xl pt-10 font-bold">
              2. Compare SQL and NoSQL databases?
            </h1>
            <p className="mt-5 text-xl">
              <span className="font-semibold text-xl text-purple-800">Answer :</span> SQL
              databases are structured and use a relational model with
              predefined schemas, while NoSQL databases are unstructured,
              flexible, and do not rely on fixed schemas, making them suitable
              for handling large amounts of unstructured data.
            </p>

            <h1 className="text-2xl pt-10 font-bold">
              3. What is express js? and What is Nest JS ?
            </h1>
            <p className="mt-5 text-xl">
              <span className="font-semibold text-xl text-purple-800">Answer: </span>
              Express.js is a popular minimalist web application framework for
              Node.js that simplifies the development of server-side
              applications by providing a robust set of features and
              middleware.. <br />
              Nest.js is a progressive Node.js framework built with TypeScript,
              inspired by Angular, and designed to create efficient, scalable,
              and maintainable server-side applications. It emphasizes
              modularity, dependency injection, and architectural patterns like
              MVC and SOLID principles.
            </p>

            <h1 className="text-2xl pt-10 font-bold">
              4. What is MongoDB aggregate and how does it work ?
            </h1>
            <p className="mt-5 text-xl">
              <span className="font-semibold text-xl text-purple-800">Answer : </span>MongoDB
              aggregate is a powerful framework for performing advanced data
              aggregation operations, such as grouping, filtering, sorting, and
              performing calculations, on MongoDB collections. It works by
              processing the data pipeline, where each stage in the pipeline
              transforms the documents based on the specified operations,
              allowing for complex data manipulations and analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
