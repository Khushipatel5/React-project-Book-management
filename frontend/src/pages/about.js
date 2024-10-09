function About(){
return(<>
<div className="container py-3" >
      <h1 className="text-center mb-4">About Our Book Management System</h1>
      <p className="lead text-center">
        Welcome to our Book Management System, where you can easily manage your personal library.
      </p>

      <h2 className="mt-5">Our Mission</h2>
      <p>
        Our mission is to empower book lovers to take full control of their collections by providing 
        a user-friendly platform that simplifies the process of adding, editing, and deleting books.
      </p>

      <h2 className="mt-5">Key Features</h2>
      <ul>
        <li>Add new books to your collection with detailed information.</li>
        <li>Edit existing book details whenever needed.</li>
        <li>Delete books you no longer want to keep in your library.</li>
        <li>Organize your books with categories and tags for easy navigation.</li>
        <li>Search for books by title, author, or genre.</li>
        <li>Track reading progress and manage wish lists.</li>
        <li>Responsive design for access on any device.</li>
      </ul>

      <h2 className="mt-5">Contact Us</h2>
      <p>
        If you have any questions or feedback about our Book Management System, feel free to reach out to us at 
        <a href="mailto:info@bookmanagement.com"> info@bookmanagement.com</a>.
      </p>
    </div>
</>)
}

export default  About;