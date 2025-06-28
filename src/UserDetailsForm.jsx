import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrImg from './assets/qr2.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#fff',
        fontFamily: 'Arial, sans-serif',
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '32px',
    },
    logoIcon: {
        fontSize: '48px',
        marginBottom: '8px',
        color: '#4a90e2',
    },
    logoTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#2c3e50',
        margin: 0,
        letterSpacing: '1px',
    },
    logoSubtitle: {
        fontSize: '16px',
        color: '#7f8c8d',
        margin: 0,
        fontWeight: '300',
    },
    form: {
        width: '90vw',
        maxWidth: '90%',
        minWidth: '300px',
        maxWidth: '80vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    input: {
        padding: '20px',
        border: '1px solid #bfc5ce',
        borderRadius: '8px',
        fontSize: '22px',
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box',
        color: '#444',
        background: '#fff',
        fontWeight: 400,
    },
    phoneInputWrapper: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #bfc5ce',
        borderRadius: '8px',
        background: '#fff',
        padding: 0,
        overflow: 'hidden',
    },
    flag: {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        borderRight: '1px solid #bfc5ce',
        padding: '0 8px',
        fontSize: '24px',
    },
    phoneInput: {
        border: 'none',
        outline: 'none',
        fontSize: '22px',
        padding: '20px',
        flex: 1,
        color: '#444',
        background: '#fff',
        fontWeight: 400,
    },
};

const paymentStyles = {
    container: {
        marginTop: '40px',
        width: '90vw',
        maxWidth: '900px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    couponRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '4px',
    },
    couponInput: {
        fontSize: '20px',
        padding: '8px',
        border: '1px solid #888',
        borderRadius: '4px 0 0 4px',
        outline: 'none',
        width: '200px',
    },
    applyBtn: {
        fontSize: '18px',
        padding: '8px 18px',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        background: '#444',
        color: '#fff',
        cursor: 'pointer',
    },
    saveMsg: {
        color: 'green',
        fontSize: '16px',
        marginLeft: '4px',
        marginBottom: '12px',
    },
    planRow: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        margin: '18px 0 0 0',
    },
    planLabel: {
        fontSize: '22px',
        fontWeight: 400,
    },
    priceCol: {
        marginLeft: 'auto',
        textAlign: 'right',
        fontSize: '20px',
        minWidth: '160px',
    },
    priceRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '6px 0',
    },
    priceTag: {
        background: '#e5e5e5',
        borderRadius: '8px',
        padding: '2px 10px',
        fontSize: '14px',
        marginRight: '8px',
    },
    payBtn: {
        marginTop: '32px',
        width: '100%',
        background: '#337edc',
        color: '#fff',
        fontSize: '28px',
        fontWeight: 400,
        border: 'none',
        borderRadius: '4px',
        padding: '18px 0',
        cursor: 'pointer',
        letterSpacing: '1px',
    },
    footer: {
        marginTop: '48px',
        width: '100%',
        textAlign: 'center',
        color: '#222',
        fontSize: '18px',
        background: '#f7f7f7',
        padding: '24px 0 0 0',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modalContent: {
        background: '#fff',
        borderRadius: '12px',
        padding: '40px 32px',
        minWidth: '340px',
        maxWidth: '90vw',
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
    },
    qrImg: {
        width: '220px',
        height: '220px',
        margin: '0 auto 24px auto',
        background: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#888',
        borderRadius: '8px',
    },
    terms: {
        marginTop: '18px',
        fontSize: '15px',
        color: '#333',
        textAlign: 'left',
    },
    closeBtn: {
        marginTop: '24px',
        padding: '10px 28px',
        fontSize: '18px',
        background: '#337edc',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
};

const UserDetailsForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [showPending, setShowPending] = useState(false);
    const [utrId, setUtrId] = useState('');
    const [utrSubmitted, setUtrSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleDone = () => {
        setShowModal(false);
        setShowPending(true);
    };

    const handleUtrSubmit = (e) => {
        e.preventDefault();
        setUtrSubmitted(true);
    };

    return (
        <div style={{ ...styles.container, position: 'relative' }}>
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    background: '#337edc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 18px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    zIndex: 1100,
                }}
            >
                &#8592; Back
            </button>
            <div style={styles.logo}>
                <h1 style={styles.logoTitle}>NS REDDY</h1>
                <p style={styles.logoSubtitle}>Academy</p>
            </div>
            {!showModal && !showPending && <>
                <form style={styles.form}>
                    <input style={styles.input} type="text" placeholder="First Name" />
                    <input style={styles.input} type="text" placeholder="Last name" />
                    <input style={styles.input} type="email" placeholder="Email" />
                    <div style={styles.phoneInputWrapper}>
                        <span style={styles.flag}>🇮🇳</span>
                        <input style={styles.phoneInput} type="tel" placeholder="Phone number" />
                    </div>
                </form>
                <div style={paymentStyles.container}>
                    <div style={paymentStyles.couponRow}>
                        <input style={paymentStyles.couponInput} value="ESC10" readOnly />
                        <button style={paymentStyles.applyBtn}>Apply</button>
                    </div>
                    <div style={paymentStyles.saveMsg}>You save 10%</div>
                    <div style={paymentStyles.planRow}>
                        <input type="radio" checked readOnly style={{ width: 22, height: 22 }} />
                        <div>
                            <span style={paymentStyles.planLabel}>Facebook (META) Ads Mastery</span><br />
                            <span style={{ fontSize: '16px' }}>Coupon code (-10%)<br />Total</span>
                        </div>
                        <div style={paymentStyles.priceCol}>
                            <div style={paymentStyles.priceRow}><span style={paymentStyles.priceTag}>INR</span>₹5,499.00</div>
                            <div style={paymentStyles.priceRow}><span style={paymentStyles.priceTag}>INR</span>-₹549.90</div>
                            <div style={paymentStyles.priceRow}><span style={paymentStyles.priceTag}>INR</span>₹4,949.10</div>
                        </div>
                    </div>
                    <button style={paymentStyles.payBtn} onClick={() => setShowModal(true)}>COMPLETE PAYMENT</button>
                </div>
                <div style={paymentStyles.footer}>
                    Refund Policy| Terms & conditions | Privacy policy | Contact Us | About Us
                </div>
            </>}
            {showModal && (
                <div style={paymentStyles.modalOverlay}>
                    <div style={paymentStyles.modalContent}>
                        <div style={paymentStyles.qrImg}>
                            <img src={qrImg} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }} />
                        </div>
                        <div style={paymentStyles.terms}>
                            <b>Terms and Conditions:</b>
                            <ul>
                                <li>
                                    Continue and pay this UPI ID by accepting ns reddy academy <span style={{ color: 'red' }}>privacy policy</span> and the payment providers' <span style={{ color: 'red' }}>terms and privacy policies</span>.
                                </li>
                                <li>
                                    Payment is <span style={{ color: 'red' }}>non-refundable</span> once completed.
                                </li>
                                <li>Ensure you scan the correct QR code for payment.</li>
                                <li>Contact support for any issues with your transaction.</li>
                                {/* <li>By completing payment, you agree to our policies.</li> */}
                            </ul>
                        </div>
                        <button style={paymentStyles.closeBtn} onClick={handleDone}>Done</button>
                    </div>
                </div>
            )}
            {showPending && (
                <div style={{
                    marginTop: '40px',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    padding: '40px 32px',
                    maxWidth: '500px',
                    width: '90vw',
                    textAlign: 'center',
                }}>
                    <h2 style={{ color: '#337edc', marginBottom: 24 }}>Your payment is pending</h2>
                    <p style={{ fontSize: '18px', marginBottom: 16 }}>
                        It will be updated in 15 min to 24 hours.<br />
                        Please check your registered Email.<br />
                        <span>
                            <span style={{ fontWeight: 'bold', color: '#337edc' }}>Username</span> and <span style={{ fontWeight: 'bold', color: '#337edc' }}>password</span> will be shared to your Email.<br />
                        </span>
                        <b>Thank you for enrolling in the course. Have a great day!</b>
                    </p>
                    {!utrSubmitted ? (
                        <form onSubmit={handleUtrSubmit} style={{ marginTop: 24 }}>
                            <label htmlFor="utr" style={{ fontSize: '17px', marginBottom: 8, display: 'block' }}>Enter your UTR ID:</label>
                            <input
                                id="utr"
                                type="text"
                                value={utrId}
                                onChange={e => setUtrId(e.target.value)}
                                style={{
                                    padding: '12px',
                                    fontSize: '18px',
                                    border: '1px solid #bfc5ce',
                                    borderRadius: '6px',
                                    width: '80%',
                                    marginBottom: '16px',
                                }}
                                required
                            />
                            <br />
                            <button type="submit" style={{
                                background: '#337edc',
                                color: '#fff',
                                fontSize: '20px',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '10px 32px',
                                cursor: 'pointer',
                            }}>Submit</button>
                        </form>
                    ) : (
                        <div style={{ color: 'green', fontSize: '18px', marginTop: 24 }}>Thank you! Your UTR ID has been submitted.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserDetailsForm; 