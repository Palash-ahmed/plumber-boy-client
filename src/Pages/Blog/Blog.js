import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <div className='border-solid rounded-lg my-8'>
                <h1 className='text-4xl font bold text-info'> Q. 1. What are the difference between SQL and NoSQL?</h1>
                <div className="overflow-x-auto my-8">
                    <table className="table w-full">

                        <thead>
                            <tr className='text-4xl'>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Relational database management system(RDBMS).</td>
                                <td>Non-relational or distributed database system.</td>
                            </tr>

                            <tr className="active">
                                <th>2</th>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>
                            </tr>

                            <tr className="active">
                                <th>4</th>
                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queriess</td>
                            </tr>

                            <tr>
                                <th>5</th>
                                <td>Vertically Scalable</td>
                                <td>Horizontally scalable</td>
                            </tr>

                            <tr className="active">
                                <th>6</th>
                                <td>Follows ACID property</td>
                                <td>Follows CAP(consistency, availability, partition tolerance)</td>
                            </tr>

                            <tr>
                                <th>7</th>
                                <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='border-solid rounded-lg my-8'>
                <h1 className='text-4xl font bold text-info my-8'> Q. 2. What is JWT? How does it work?</h1>
                <p className="text-xl">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p> <br />
                <p className="text-xl">Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
            </div>
            <div className='border-solid rounded-lg my-8'>
                <h1 className='text-4xl font bold text-info'>Q. 3. What are the difference between JavaScript and NodeJs?</h1>
                <div className="overflow-x-auto my-8">
                    <table className="table w-9/12">

                        <thead>
                            <tr className='text-4xl'>
                                <th></th>
                                <th>JavaScript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>

                            <tr className="active">
                                <th>2</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>
                            </tr>

                            <tr className="active">
                                <th>4</th>
                                <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>

                            <tr>
                                <th>5</th>
                                <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                            </tr>

                            <tr className="active">
                                <th>6</th>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server-side development.</td>
                            </tr>

                            <tr>
                                <th>7</th>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                            </tr>

                            <tr className="active">
                                <th>8</th>
                                <td>	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                                <td>Nodejs is written in C, C++ and Javascript.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='border-solid rounded-lg my-8'>
                <h1 className='text-4xl font bold text-info my-8'> Q. 4. How does NodeJs handle multiple requests at the same time?</h1>
                <p className="text-xl">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p> <br />
                <p className="text-xl">Node JS Platform uses “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Then how it really handles concurrent client requests without using multiple threads.</p>
            </div>
        </div>
    );
};

export default Blog;