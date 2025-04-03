import Bredcumb from "@/app/_components/page_components/Bredcumb";
import Link from "next/link";

export const metadata = {
  title: "Synergy | Blogs",
  description: "Your Strategic Partner for Business Excellence",
};
export const dynamic = "force-dynamic";
export default async function PageBlogs({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { post_title } = await fetch(`${APIURL}/full_details?ID=339`, {
    cache: "no-store",
  }).then((res) => {
    return res.json();
  });

  const { posts } = await fetch(`${APIURL}/blogs_list`, {
    cache: "no-store",
  }).then((res) => {
    return res.json();
  });
  // data.reverse();
  // let [firstBlog] = data;

  const blog = Object.values(posts);
  blog.reverse();
  const firstBlog = blog[0];

  const truncateText = (text, length = 200) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };
  return (
    <>
      {/* <!--====== Banner part start ======--> */}
      <section className="banner-section wow fadeInUp blog-banner-sec">
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <img src="/img/inner-banner.png" />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        {post_title}
                      </h1>
                    </div>
                    <Bredcumb title={post_title} />
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-3 text-right">
                  <div className="bredcumb">
                    <ul>
                      <li>
                        <a href="/"> Home </a>
                      </li>
                      <li> - </li>
                      <li> Blog </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="row justify-content-center text-white blog-title-row mt-5">
                <div className="col-xl-8 col-lg-8 pl-lg-0">
                  <div className="blog-banner h-100">
                    <img src={firstBlog?.image} alt={firstBlog?.post_title} />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 d-flex flex-column p-lg-5">
                  <div className="blog-title-content mb-2">
                    <h3>{firstBlog?.post_title}</h3>
                    <p>
                      {truncateText(
                        firstBlog.post_content.replace(/<[^>]*>/g, "")
                      )}
                    </p>
                    <Link href={`/blogs/${firstBlog.post_name}`}>
                      {" "}
                      Read More{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Banner part end ======--> */}

      {/* <!--====== Feature Part start ======--> */}

      <section
        className="blog-section section-gap wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
        <div className="container">
          {blog.length == 1 && <h4>More Blogs Are Coming Soon!</h4>}
          <div className="row justify-content-left">
            {blog.length > 1 &&
              blog.slice(1).map((item) => {
                return (
                  <div key={item.id} className="col-lg-4">
                    <div className="blog-box">
                      <div className="blog-img">
                        <Link href={`/blogs/${item.post_name}`}>
                          <img src={item?.image} alt={item.post_title} />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <p>{item.post_title}</p>
                        <a href={`/blogs/${item.post_name}`}> Read More </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
