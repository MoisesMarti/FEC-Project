import { useContext } from 'react';
import { HostContext } from '../Context/HostContext';
import "./ShowRules.css"

export default function ShowRules() {

    const { showHouseRules, closeHouseRules } = useContext(HostContext)

    return (
        <>
            {showHouseRules && (
                <div className="modal-overlay">
                    <div className='rule-modal-container'>
                        <div className='rules-modal'>
                            <div className='rules-x-container'>
                                <button className="rules-x" onClick={closeHouseRules}>X</button>
                            </div>
                            <div className='rules-content-container'>
                                <div className='rules-title'>
                                    <p>House rules</p>
                                </div>
                                <div className='rules-info'>
                                Follow these rules to be a considerate guest and avoid any issues during your stay.
                                </div>
                                <div className='who-container'>
                                    <div className='who-title'>
                                        <p>Who can stay</p>
                                    </div>
                                    <div className='max-guest'>
                                        <div className='guest-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M22 5a6 6 0 0 1 3.643 10.768 9.003 9.003 0 0 1 5.353 7.967L31 24h-2a7.002 7.002 0 0 0-5.999-6.929v-2.197A4.002 4.002 0 0 0 22 7a4 4 0 0 0-3.679 5.574A4.991 4.991 0 0 1 21 17a4.986 4.986 0 0 1-1.599 3.665 9.003 9.003 0 0 1 5.595 8.07L25 29h-2a7.002 7.002 0 0 0-5.999-6.929v-2.242a3.001 3.001 0 1 0-2 0L15 22.071a7.002 7.002 0 0 0-5.996 6.688L9 29H7a9.003 9.003 0 0 1 5.6-8.335 5 5 0 0 1 1.077-8.093A4 4 0 1 0 9 14.874v2.197a7.002 7.002 0 0 0-5.996 6.688L3 24H1a9.002 9.002 0 0 1 5.357-8.232A6 6 0 1 1 15.917 10h.166A6.002 6.002 0 0 1 22 5z"></path>
                                            </svg>
                                        </div>
                                        <div className='guest-number'>5 guests maximum</div>
                                    </div>
                                    <div className='pets'>
                                        <div className='pet-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                                            </svg>
                                        </div>
                                        <div className='pet-policy'>Pets allowed</div>
                                    </div>
                                </div>
                                <div className='allowed-container'>
                                    <div className='allowed-title'>What's allowed</div>
                                    <div className='check-in-container'>
                                        <div className='clock-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"></path>
                                            </svg>
                                        </div>
                                        <div className='in-time'>Check-in after 4:00 PM</div>
                                    </div>
                                    <div className='check-out-container'>
                                        <div className='clock-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"></path>
                                            </svg>
                                        </div>
                                        <div className='in-time'>Checkout before 11:00 AM</div>
                                    </div>
                                    <div className='quiet-container'>
                                        <div className='moon-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M15.765 1.05a1 1 0 0 1 .949 1.494A12.932 12.932 0 0 0 15 9c0 7.18 5.82 13 13 13 .36 0 .717-.015 1.072-.044a1 1 0 0 1 .95 1.494A14.991 14.991 0 0 1 17 31C8.716 31 2 24.284 2 16 2 8.176 8.014 1.682 15.765 1.05zm-1.651 2.27C8.294 4.64 4 9.845 4 16c0 7.18 5.82 13 13 13a12.98 12.98 0 0 0 9.96-4.643l.224-.274.077-.102-.198-.01c-7.635-.47-13.725-6.653-14.05-14.327l-.01-.33L13 9c0-1.714.288-3.387.841-4.964L14 3.608z"></path>
                                            </svg>
                                        </div>
                                        <div className='quiet-info'>
                                            <div className='quiet-title'>Quiet hours</div>
                                            <div className='quiet-times'>10:00 PM - 7:00 AM</div>
                                        </div>
                                    </div>
                                    <div className='self-check-in-container'>
                                        <div className='door-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
                                            </svg>
                                        </div>
                                        <div className='self-check-in-info'>Self check-in with smart lock</div>
                                    </div>
                                    <div className='photography-container'>
                                        <div className='camera-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="m17.5857864 2c.471496 0 .9258264.16648982 1.2843934.46691315l.1298202.11887329 2.415 2.41421356h3.585c2.6140671 0 4.7595988 2.00603836 4.9811372 4.56265721l.0142433.22045317.0046195.21688962v14c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-18c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-14c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951h3.614l2.3815656-2.40658215c.2921899-.29535186.6668297-.49024866 1.0702353-.56228419l.1744928-.02328492.177076-.00784874zm0 2h-3.1684167l-2.967882 3h-4.4494877c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v14c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h18c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-14c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269h-4.4142136zm-1.5857864 5c4.418278 0 8 3.581722 8 8s-3.581722 8-8 8-8-3.581722-8-8 3.581722-8 8-8zm0 2c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm-9-2c.55228475 0 1 .44771525 1 1 0 .5522847-.44771525 1-1 1s-1-.4477153-1-1c0-.55228475.44771525-1 1-1z"></path>
                                            </svg>
                                        </div>
                                        <div className='photography-info'>Commercial photography allowed</div>
                                    </div>
                                    <div className='parties-container'>
                                        <div className='balloon-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M5.12 9.363l1.883 1.882.001.06c.118 4.47 2.842 8.192 8.305 11.203l.376.204.272.142.311-.192c.45-.284.882-.568 1.297-.854l1.437 1.436c-.494.348-1.01.693-1.549 1.034L19.65 27.2a1.125 1.125 0 0 1-.9 1.801H17v3h-2v-3h-1.75a1.125 1.125 0 0 1-.901-1.799l2.14-2.862C8.212 20.918 5 16.457 5 11c0-.556.041-1.103.12-1.637zm-1.413-7.07l26 26-1.414 1.414-26-26zm12.288 23.374L14.997 27h2zM16 0c5.909 0 11 5.275 11 11 0 2.915-1.167 5.676-3.472 8.286l-1.416-1.418c1.787-2.057 2.737-4.169 2.871-6.332l.013-.27L25 11c0-4.636-4.212-9-9-9a8.978 8.978 0 0 0-6.732 3.026L7.853 3.61A10.972 10.972 0 0 1 16 0z"></path>
                                            </svg>
                                        </div>
                                        <div className='parties-info'>No parties or events</div>
                                    </div>
                                    <div className='smoking-container'>
                                        <div className='nosmoking-icon'>
                                            <svg viewBox='0 0 32 32'>
                                                <path d="M3.707 2.293l26 26-1.414 1.414-26-26zM14.757 19l2 2H3v4h17.757l2 2H3a2 2 0 0 1-1.995-1.85L1 25v-4a2 2 0 0 1 1.85-1.995L3 19zM30 19v6.757l-2-2V19zm-4 0v2.757L23.243 19zM21 3a4 4 0 0 1 3.356 6.178l-.1.145.137.041a8.004 8.004 0 0 1 5.603 7.387L30 17h-2a6 6 0 0 0-5.775-5.996L22 11h-1V9a2 2 0 0 0 .15-3.995L21 5zm1 10a4 4 0 0 1 3.995 3.8L26 17h-2a2 2 0 0 0-1.85-1.995L22 15h-2.757l-2.001-2zM17 3v2a4 4 0 0 0-3.993 3.764l-1.691-1.69a6.003 6.003 0 0 1 5.46-4.07z"></path>
                                            </svg>
                                        </div>
                                        <div className='smoking-info'>No smoking</div>
                                    </div>
                                </div>
                                <div className='additional-rules-container'>
                                    <div className='additional-rules'>Additional rules</div>
                                    <p>- Winter road conditions REQUIRE chains/cables for your vehicle in the winter months. If do not own chains, we're happy to make a recommendation for you to purchase. If you are not willing to acquire chains, please plan your stay for springtime when the roads are dry. </p>
                                    <p>- If you do run in to traction issues (winter) and get stuck, PLEASE DO NOT IMPOSE on our neighbors in Wilderness Ranch to assist you. There is no cell signal on the roads in Wilderness Ranch. To call for assistance, make your way on foot down the mountain to the mailroom (wifi & landline) or up the mountain to our cabin (wifi, verizon cell & landline).</p>
                                    <p>- Parties are not permitted.  </p>
                                    <p>- The cabin is in a mountain neighborhood that values its quiet and tranquility. Quiet hours are 10pm to 8am. Voices carry more than we realize it is unacceptable to disturb the neighbors with loud conversations from the hilltop, hot tub, or the deck. Please take it inside by 10pm. We appreciate your cooperation.</p>
                                    <p>- Smoking is not permitted anywhere on the property. </p>
                                    <p>- If you are planning on bringing pets, ensure that you send us an AIRBNB message with an accurate count. Pet fee is $25/pet/night.</p>
                                    <p>- Guests will please clean up after their pets.</p>
                                    <p>- Children under the age of 8 are NOT permitted in the hot tub at any time.  Absolutely NO DIAPERS of any kind (including swim diapers) permitted in the hot tub, ever. </p>
                                    <p>- Please leave the wildlife alone.</p>
                                    <p>- This property has a private septic system. Kindly place feminine and other sanitary products in the garbage. DO NOT flush them as they can cause catastrophic sewer failure. (We're certain that a sewer failure will not 'enhance' the quality of your stay!)</p>
                                    <p>- Exterior lights must be turned off during the quiet hours of 10pm to 8am. This is to limit light pollution in the neighborhood.</p>
                                </div>
                                <div className='language-container'>
                                    <div className='language-icon'>
                                        <svg viewBox='0 0 16 16'>
                                            <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path>
                                        </svg>
                                    </div>
                                    <div className='language'>Automatically translated</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}