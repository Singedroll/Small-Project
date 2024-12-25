const BlogPost = ({ title, body }) => {
  return (
    <div style={styles.container}>
      <img
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        alt="Image description"
        style={styles.image}
      />

      <h1 style={styles.title}>{title}</h1>

      <p style={styles.body}>{body}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "300px",
    margin: "0 auto",
    padding: "0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },

  image: {
    display: "block",
    width: "100%",
    height: "auto",
    margin: "0",
    borderRadius: "8px 8px 0 0",
  },

  title: {
    fontSize: "1.5em",
    margin: "10px 0",
    padding: "0 10px",
    color: "#333",
  },

  body: {
    fontSize: "1em",
    lineHeight: "1.6",
    padding: "0 10px 10px",
    color: "#666",
  },
};

export default BlogPost;
