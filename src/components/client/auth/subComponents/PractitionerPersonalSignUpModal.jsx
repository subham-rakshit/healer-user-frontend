import React, { useState, useEffect } from "react";

const PractitionerPersonalSignUpModal = ({ closeModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <div
      className={`main-modal modal fade show ${isVisible ? "modal-show" : ""} ${
        isClosing ? "modal-closing" : ""
      }`}
      id="practitionerPersonalModal__wr"
      style={{ display: "block" }}
      onClick={handleClose}
    >
      <div
        className="modal-dialog customModalDialog_400__wr modal-dialog-centered modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="modal-content">
          <div className="modal-header">
            <picture className="starIcon__wr">
              <img
                src="/images/heelar-star-bg.svg"
                loading="lazy"
                decoding="async"
                className="img-fluid"
                alt=""
                title=""
                width="50"
                height="50"
              />
            </picture>
            <h5 className="modal-title" id="practitionerPersonalModalLabel">
              Practitioner Sign-up
            </h5>
            <p>Please complete enter your details below</p>
            <button
              type="button"
              className="close"
              onClick={handleClose}
              aria-label="Close"
            >
              <span aria-hidden="true">
                <img
                  src="/images/x-mark-grey-icon.svg"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                  alt=""
                  title=""
                  width="12"
                  height="12"
                />
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 firstName__wr">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 lastName__wr">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 drop__wr lang__wr">
                <label className="form-label">Prefered Language</label>
                <select className="form-control">
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Hindi">Hindi</option>
                </select>
                <span className="chevDownIcon__wr">
                  <img
                    src="/images/chevron-down-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt="arrow-icon"
                    title="arrow-icon"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 drop__wr age__wr">
                <label className="form-label">Age</label>
                <select className="form-control titleNull__wr">
                  <option value="">Age</option>
                  <option value="10 year">10 year</option>
                  <option value="15 year">15 year</option>
                  <option value="20 year">20 year</option>
                  <option value="25 year">25 year</option>
                </select>
                <span className="chevDownIcon__wr">
                  <img
                    src="/images/chevron-down-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt="arrow-icon"
                    title="arrow-icon"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 drop__wr country__wr">
                <label className="form-label">Country of residence</label>
                <select className="form-control titleNull__wr">
                  <option>Country</option>
                  <option value="1">Afghanistan</option>
                  <option value="2">Åland Islands</option>
                  <option value="3">Albania</option>
                  <option value="4">Algeria</option>
                  <option value="5">American Samoa</option>
                  <option value="6">Andorra</option>
                  <option value="7">Angola</option>
                  <option value="8">Anguilla</option>
                  <option value="9">Antarctica</option>
                  <option value="10">Antigua and Barbuda</option>
                  <option value="11">Argentina</option>
                  <option value="12">Armenia</option>
                  <option value="13">Aruba</option>
                  <option value="14">Australia</option>
                  <option value="15">Austria</option>
                  <option value="16">Azerbaijan</option>
                  <option value="17">Bahamas</option>
                  <option value="18">Bahrain</option>
                  <option value="19">Bangladesh</option>
                  <option value="20">Barbados</option>
                  <option value="21">Belarus</option>
                  <option value="22">Belgium</option>
                  <option value="23">Belize</option>
                  <option value="24">Benin</option>
                  <option value="25">Bermuda</option>
                  <option value="26">Bhutan</option>
                  <option value="27">Bolivia, Plurinational State of</option>
                  <option value="28">Bonaire, Sint Eustatius and Saba</option>
                  <option value="29">Bosnia and Herzegovina</option>
                  <option value="30">Botswana</option>
                  <option value="31">Bouvet Island</option>
                  <option value="32">Brazil</option>
                  <option value="33">British Indian Ocean Territory</option>
                  <option value="34">Brunei Darussalam</option>
                  <option value="35">Bulgaria</option>
                  <option value="36">Burkina Faso</option>
                  <option value="37">Burundi</option>
                  <option value="38">Cambodia</option>
                  <option value="39">Cameroon</option>
                  <option value="40">Canada</option>
                  <option value="41">Cape Verde</option>
                  <option value="42">Cayman Islands</option>
                  <option value="43">Central African Republic</option>
                  <option value="44">Chad</option>
                  <option value="45">Chile</option>
                  <option value="46">China</option>
                  <option value="47">Christmas Island</option>
                  <option value="48">Cocos (Keeling) Islands</option>
                  <option value="49">Colombia</option>
                  <option value="50">Comoros</option>
                  <option value="51">Congo</option>
                  <option value="52">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="53">Cook Islands</option>
                  <option value="54">Costa Rica</option>
                  <option value="55">Côte d'Ivoire</option>
                  <option value="56">Croatia</option>
                  <option value="57">Cuba</option>
                  <option value="58">Curaçao</option>
                  <option value="59">Cyprus</option>
                  <option value="60">Czech Republic</option>
                  <option value="61">Denmark</option>
                  <option value="62">Djibouti</option>
                  <option value="63">Dominica</option>
                  <option value="64">Dominican Republic</option>
                  <option value="65">Ecuador</option>
                  <option value="66">Egypt</option>
                  <option value="67">El Salvador</option>
                  <option value="68">Equatorial Guinea</option>
                  <option value="69">Eritrea</option>
                  <option value="70">Estonia</option>
                  <option value="71">Ethiopia</option>
                  <option value="72">Falkland Islands (Malvinas)</option>
                  <option value="73">Faroe Islands</option>
                  <option value="74">Fiji</option>
                  <option value="75">Finland</option>
                  <option value="76">France</option>
                  <option value="77">French Guiana</option>
                  <option value="78">French Polynesia</option>
                  <option value="79">French Southern Territories</option>
                  <option value="80">Gabon</option>
                  <option value="81">Gambia</option>
                  <option value="82">Georgia</option>
                  <option value="83">Germany</option>
                  <option value="84">Ghana</option>
                  <option value="85">Gibraltar</option>
                  <option value="86">Greece</option>
                  <option value="87">Greenland</option>
                  <option value="88">Grenada</option>
                  <option value="89">Guadeloupe</option>
                  <option value="90">Guam</option>
                  <option value="91">Guatemala</option>
                  <option value="92">Guernsey</option>
                  <option value="93">Guinea</option>
                  <option value="94">Guinea-Bissau</option>
                  <option value="95">Guyana</option>
                  <option value="96">Haiti</option>
                  <option value="97">
                    Heard Island and McDonald Mcdonald Islands
                  </option>
                  <option value="98">Holy See (Vatican City State)</option>
                  <option value="99">Honduras</option>
                  <option value="100">Hong Kong</option>
                  <option value="101">Hungary</option>
                  <option value="102">Iceland</option>
                  <option value="103">India</option>
                  <option value="104">Indonesia</option>
                  <option value="105">Iran, Islamic Republic of</option>
                  <option value="106">Iraq</option>
                  <option value="107">Ireland</option>
                  <option value="108">Isle of Man</option>
                  <option value="109">Israel</option>
                  <option value="110">Italy</option>
                  <option value="111">Jamaica</option>
                  <option value="112">Japan</option>
                  <option value="113">Jersey</option>
                  <option value="114">Jordan</option>
                  <option value="115">Kazakhstan</option>
                  <option value="116">Kenya</option>
                  <option value="117">Kiribati</option>
                  <option value="118">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="119">Korea, Republic of</option>
                  <option value="120">Kuwait</option>
                  <option value="121">Kyrgyzstan</option>
                  <option value="122">Lao People's Democratic Republic</option>
                  <option value="123">Latvia</option>
                  <option value="124">Lebanon</option>
                  <option value="125">Lesotho</option>
                  <option value="126">Liberia</option>
                  <option value="127">Libya</option>
                  <option value="128">Liechtenstein</option>
                  <option value="129">Lithuania</option>
                  <option value="130">Luxembourg</option>
                  <option value="131">Macao</option>
                  <option value="132">
                    Macedonia, the Former Yugoslav Republic of
                  </option>
                  <option value="133">Madagascar</option>
                  <option value="134">Malawi</option>
                  <option value="135">Malaysia</option>
                  <option value="136">Maldives</option>
                  <option value="137">Mali</option>
                  <option value="138">Malta</option>
                  <option value="139">Marshall Islands</option>
                  <option value="140">Martinique</option>
                  <option value="141">Mauritania</option>
                  <option value="142">Mauritius</option>
                  <option value="143">Mayotte</option>
                  <option value="144">Mexico</option>
                  <option value="145">Micronesia, Federated States of</option>
                  <option value="146">Moldova, Republic of</option>
                  <option value="147">Monaco</option>
                  <option value="148">Mongolia</option>
                  <option value="149">Montenegro</option>
                  <option value="150">Montserrat</option>
                  <option value="151">Morocco</option>
                  <option value="152">Mozambique</option>
                  <option value="153">Myanmar</option>
                  <option value="154">Namibia</option>
                  <option value="155">Nauru</option>
                  <option value="156">Nepal</option>
                  <option value="157">Netherlands</option>
                  <option value="158">New Caledonia</option>
                  <option value="159">New Zealand</option>
                  <option value="160">Nicaragua</option>
                  <option value="161">Niger</option>
                  <option value="162">Nigeria</option>
                  <option value="163">Niue</option>
                  <option value="164">Norfolk Island</option>
                  <option value="165">Northern Mariana Islands</option>
                  <option value="166">Norway</option>
                  <option value="167">Oman</option>
                  <option value="168">Pakistan</option>
                  <option value="169">Palau</option>
                  <option value="170">Palestine, State of</option>
                  <option value="171">Panama</option>
                  <option value="172">Papua New Guinea</option>
                  <option value="173">Paraguay</option>
                  <option value="174">Peru</option>
                  <option value="175">Philippines</option>
                  <option value="176">Pitcairn</option>
                  <option value="177">Poland</option>
                  <option value="178">Portugal</option>
                  <option value="179">Puerto Rico</option>
                  <option value="180">Qatar</option>
                  <option value="181">Réunion</option>
                  <option value="182">Romania</option>
                  <option value="183">Russian Federation</option>
                  <option value="184">Rwanda</option>
                  <option value="185">Saint Barthélemy</option>
                  <option value="186">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option value="187">Saint Kitts and Nevis</option>
                  <option value="188">Saint Lucia</option>
                  <option value="189">Saint Martin (French part)</option>
                  <option value="190">Saint Pierre and Miquelon</option>
                  <option value="191">Saint Vincent and the Grenadines</option>
                  <option value="192">Samoa</option>
                  <option value="193">San Marino</option>
                  <option value="194">Sao Tome and Principe</option>
                  <option value="195">Saudi Arabia</option>
                  <option value="196">Senegal</option>
                  <option value="197">Serbia</option>
                  <option value="198">Seychelles</option>
                  <option value="199">Sierra Leone</option>
                  <option value="200">Singapore</option>
                  <option value="201">Sint Maarten (Dutch part)</option>
                  <option value="202">Slovakia</option>
                  <option value="203">Slovenia</option>
                  <option value="204">Solomon Islands</option>
                  <option value="205">Somalia</option>
                  <option value="206">South Africa</option>
                  <option value="207">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="208">South Sudan</option>
                  <option value="209">Spain</option>
                  <option value="210">Sri Lanka</option>
                  <option value="211">Sudan</option>
                  <option value="212">Suriname</option>
                  <option value="213">Svalbard and Jan Mayen</option>
                  <option value="214">Swaziland</option>
                  <option value="215">Sweden</option>
                  <option value="216">Switzerland</option>
                  <option value="217">Syrian Arab Republic</option>
                  <option value="218">Taiwan</option>
                  <option value="219">Tajikistan</option>
                  <option value="220">Tanzania, United Republic of</option>
                  <option value="221">Thailand</option>
                  <option value="222">Timor-Leste</option>
                  <option value="223">Togo</option>
                  <option value="224">Tokelau</option>
                  <option value="225">Tonga</option>
                  <option value="226">Trinidad and Tobago</option>
                  <option value="227">Tunisia</option>
                  <option value="228">Turkey</option>
                  <option value="229">Turkmenistan</option>
                  <option value="230">Turks and Caicos Islands</option>
                  <option value="231">Tuvalu</option>
                  <option value="232">Uganda</option>
                  <option value="233">Ukraine</option>
                  <option value="234">United Arab Emirates</option>
                  <option value="235">United Kingdom</option>
                  <option value="236">United States</option>
                  <option value="237">
                    United States Minor Outlying Islands
                  </option>
                  <option value="238">Uruguay</option>
                  <option value="239">Uzbekistan</option>
                  <option value="240">Vanuatu</option>
                  <option value="241">Venezuela, Bolivarian Republic of</option>
                  <option value="242">Viet Nam</option>
                  <option value="243">Virgin Islands, British</option>
                  <option value="244">Virgin Islands, U.S.</option>
                  <option value="245">Wallis and Futuna</option>
                  <option value="246">Western Sahara</option>
                  <option value="247">Yemen</option>
                  <option value="248">Zambia</option>
                  <option value="249">Zimbabwe</option>
                </select>
                <span className="chevDownIcon__wr">
                  <img
                    src="/images/chevron-down-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt="arrow-icon"
                    title="arrow-icon"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 drop__wr city__wr">
                <label className="form-label">City</label>
                <select className="form-control titleNull__wr">
                  <option value="">City</option>
                  <option value="1">Abu Dhabi</option>
                  <option value="2">Ajmān</option>
                  <option value="3">Al Ain</option>
                  <option value="4">Al Awdah</option>
                  <option value="5">Al Fahlayn</option>
                  <option value="6">Al Fulayyah</option>
                  <option value="7">Al Fara'</option>
                  <option value="8">Al Ghabah</option>
                  <option value="9">Al Ghabam</option>
                  <option value="10">Al Ghashban</option>
                  <option value="11">Al Hamraniyah</option>
                  <option value="12">Al Hamriyah</option>
                  <option value="13">Al Haybah</option>
                  <option value="14">Al Hayl</option>
                  <option value="15">Al Hayr</option>
                  <option value="16">Al Hayrah</option>
                  <option value="17">Al Hulaylah</option>
                  <option value="18">Al Jaddah</option>
                  <option value="19">Al Khari</option>
                  <option value="20">Al Khashfah</option>
                  <option value="21">Al Mahamm</option>
                  <option value="22">Al Masafirah</option>
                  <option value="23">Al Mataf</option>
                  <option value="24">Al Mu'amurah</option>
                  <option value="25">Al Naslah</option>
                  <option value="26">Al Qir</option>
                  <option value="27">Al Quwayz</option>
                  <option value="28">Al Usayli</option>
                  <option value="29">Al Yahar</option>
                  <option value="30">Ar Rafa'ah</option>
                  <option value="31">Arthaban</option>
                  <option value="32">Athabat</option>
                  <option value="33">Ash Sha'm</option>
                  <option value="34">As Sur</option>
                  <option value="35">Awanat, Ras al-Khaimah</option>
                  <option value="36">Baqal</option>
                  <option value="37">Bidiyah</option>
                  <option value="38">Daftah</option>
                  <option value="39">Dhadna</option>
                  <option value="40">Dibba Al-Fujairah</option>
                  <option value="41">Dibba Al-Hisn</option>
                  <option value="42">Dubai</option>
                  <option value="43">Fujairah</option>
                  <option value="44">Kalba</option>
                  <option value="45">Kawr Fakkān</option>
                  <option value="46">Mīnā' Jabal 'Alī</option>
                  <option value="47">Mīnā' Şaqr</option>
                  <option value="48">Mīnā' Zāyid</option>
                  <option value="49">Ras al-Khaimah</option>
                  <option value="50">Umm al-Qaiwain</option>
                  <option value="51">Quţūf</option>
                  <option value="52">Ruwais</option>
                  <option value="53">Sharjah</option>
                  <option value="54">Sila</option>
                </select>
                <span className="chevDownIcon__wr">
                  <img
                    src="/images/chevron-down-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt="arrow-icon"
                    title="arrow-icon"
                    width="20"
                    height="20"
                  />
                </span>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 drop__wr exp__wr">
                <label className="form-label">
                  Year of experience in providing healing
                </label>
                <select className="form-control titleNull__wr">
                  <option value="">years of providing healing</option>
                  <option value="1 year">1 year</option>
                  <option value="1.5 year">1.5 year</option>
                  <option value="2 year">2 year</option>
                  <option value="2.5 year">2.5 year</option>
                </select>
                <span className="chevDownIcon__wr">
                  <img
                    src="/images/chevron-down-grey-icon.svg"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    alt="arrow-icon"
                    title="arrow-icon"
                    width="20"
                    height="20"
                  />
                </span>
                <small className="form-text">
                  You must have at least 1 year of experience in providing
                  healing.
                </small>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 website__wr">
                <label className="form-label">Your website ( optional )</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="website"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 social__wr">
                <label className="form-label">Your Social Media</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Social media links"
                    aria-label="Recipient's media links"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary primaryBtn__wr"
                      type="button"
                      id="button-addon2"
                      data-toggle="modal"
                      data-target="#addSocialModal__wr"
                      data-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="resultWrap__wr">
                  <div className="owl-carousel owl-theme modalSocialSlider__wr">
                    <div className="item">
                      <span className="badge badge-pill badge__wr">
                        <small className="title__wr">facebook</small>
                        <button
                          type="button"
                          className="btn close__wr"
                          data-toggle="modal"
                          data-target="#removeSocialModal__wr"
                          data-dismiss="modal"
                        >
                          <i className="bi bi-x-circle-fill d-inline-flex"></i>
                        </button>
                      </span>
                    </div>
                    <div className="item">
                      <span className="badge badge-pill badge__wr">
                        <small className="title__wr">X</small>
                        <button
                          type="button"
                          className="btn close__wr"
                          data-toggle="modal"
                          data-target="#removeSocialModal__wr"
                          data-dismiss="modal"
                        >
                          <i className="bi bi-x-circle-fill d-inline-flex"></i>
                        </button>
                      </span>
                    </div>
                    <div className="item">
                      <span className="badge badge-pill badge__wr">
                        <small className="title__wr">Linkedin</small>
                        <button
                          type="button"
                          className="btn close__wr"
                          data-toggle="modal"
                          data-target="#removeSocialModal__wr"
                          data-dismiss="modal"
                        >
                          <i className="bi bi-x-circle-fill d-inline-flex"></i>
                        </button>
                      </span>
                    </div>
                    <div className="item">
                      <span className="badge badge-pill badge__wr">
                        <small className="title__wr">Instagram</small>
                        <button
                          type="button"
                          className="btn close__wr"
                          data-toggle="modal"
                          data-target="#removeSocialModal__wr"
                          data-dismiss="modal"
                        >
                          <i className="bi bi-x-circle-fill d-inline-flex"></i>
                        </button>
                      </span>
                    </div>
                    <div className="item">
                      <span className="badge badge-pill badge__wr">
                        <small className="title__wr">Pinterest</small>
                        <button
                          type="button"
                          className="btn close__wr"
                          data-toggle="modal"
                          data-target="#removeSocialModal__wr"
                          data-dismiss="modal"
                        >
                          <i className="bi bi-x-circle-fill d-inline-flex"></i>
                        </button>
                      </span>
                    </div>
                    <div className="item">
                      <span className="badge badge-pill badge__wr">
                        <small className="title__wr">Youtube</small>
                        <button
                          type="button"
                          className="btn close__wr"
                          data-toggle="modal"
                          data-target="#removeSocialModal__wr"
                          data-dismiss="modal"
                        >
                          <i className="bi bi-x-circle-fill d-inline-flex"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btnParent__wr">
                <button
                  type="button"
                  className="btn btn-primary primaryBtn__wr roundedPill_22__wr lh_150__wr py_10px__wr px_18px__wr border_w_1__wr w-100"
                  onClick={handleClose}
                  // data-toggle="modal"
                  // data-target="#practitionerWelcomeModal__wr"
                  // data-dismiss="modal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PractitionerPersonalSignUpModal;
