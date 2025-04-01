function ViewPage({ title, children}) {

  return (
    <section className="view-page">
        <h2 className="view-tittle">
            {title}
        </h2>
        <div className="view-container">
            {
                children.length < 4 ? children: <p className="alert">can not has more three children components </p> 
            }
        </div>
    </section>
  );
}   

export default ViewPage;