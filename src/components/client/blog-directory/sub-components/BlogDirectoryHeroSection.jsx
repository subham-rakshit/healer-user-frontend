import React from "react";

const BlogDirectoryHeroSection = () => {
  return (
    <article className="contentDirectoryBannerSec__wr blogContentDirectoryBnrSec__wr">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="row spaceInner_lg_x_32px__wr">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="supportBnrSupTitleWrap__wr contentDirectoryBnrSupTitleWrap__wr">
              <h6 className="supportBnrSupTitle__wr contentDirectoryBnrSupTitle__wr">
                Courses
              </h6>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="contentBlock__wr contentDirectoryBnrContentBlock__wr">
              <div className="contentBlockHeading__wr contentDirectoryBnrContentHeading__wr">
                <div className="contentBlockTitleWrap__wr contentDirectoryBnrContentTitleWrap__wr">
                  <h2 className="contentBlockTitle__wr contentDirectoryBnrContentTitle__wr">
                    Discover Blogs
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="content__wr contentDirectoryContent__wr">
              <p>Further your journey by participating in a course.</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 searchBoxWrap__wr contentDirectoryBnrSearchBoxWrap__wr">
            <form action="">
              <div className="form-group has-search">
                <span className="form-control-feedback">
                  <i className="fa-light fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDirectoryHeroSection;
