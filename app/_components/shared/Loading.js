export default function Loading(){
    return (
     <>   
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">                       
                        <div className="card">
                            <div className="card-body text-center">
                              <div className="spinner-border text-primary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </>
    )
  }
  