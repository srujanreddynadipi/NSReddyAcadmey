import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPlans = () => {
    const navigate = useNavigate();
    const styles = {
        pricingContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        },
        header: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px'
        },
        logo: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        },
        logoIcon: {
            position: 'relative',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #4a90e2, #357abd)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontSize: '32px',
            color: 'white'
        },
        logoText: {
            margin: 0
        },
        logoTitle: {
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2c3e50',
            margin: 0,
            letterSpacing: '1px'
        },
        logoSubtitle: {
            fontSize: '16px',
            color: '#7f8c8d',
            margin: 0,
            fontWeight: '300'
        },
        mainTitle: {
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '50px',
            letterSpacing: '2px'
        },
        pricingCards: {
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        pricingCard: {
            background: 'white',
            borderRadius: '12px',
            padding: '30px 25px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            width: '320px',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        },
        popularCard: {
            background: 'white',
            borderRadius: '12px',
            padding: '30px 25px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            width: '320px',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '2px solid #4a90e2',
            transform: 'scale(1.02)'
        },
        planTitle: {
            color: '#4a90e2',
            fontSize: '20px',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '15px',
            lineHeight: '1.3'
        },
        price: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2c3e50',
            textAlign: 'center',
            marginBottom: '15px'
        },
        popularBadge: {
            background: '#4a90e2',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '12px',
            textAlign: 'center',
            margin: '10px auto',
            width: 'fit-content',
            fontWeight: '500'
        },
        planDescription: {
            color: '#666',
            fontSize: '14px',
            textAlign: 'center',
            marginBottom: '15px',
            lineHeight: '1.4'
        },
        discountCode: {
            color: '#666',
            fontSize: '12px',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '25px'
        },
        features: {
            marginBottom: '25px'
        },
        feature: {
            padding: '8px 0',
            fontSize: '13px',
            lineHeight: '1.4',
            color: '#333',
            borderBottom: '1px solid #f0f0f0'
        },
        featureNoAccess: {
            padding: '8px 0',
            fontSize: '13px',
            lineHeight: '1.4',
            color: '#e74c3c',
            borderBottom: '1px solid #f0f0f0'
        },
        buyButton: {
            width: '100%',
            padding: '15px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        blueButton: {
            background: 'linear-gradient(135deg, #4a90e2, #357abd)'
        },
        tealButton: {
            background: 'linear-gradient(135deg, #48c9b0, #16a085)'
        }
    };

    return (
        <div style={styles.pricingContainer}>
            {/* Header */}
            <div style={styles.header}>
                <div style={styles.logo}>
                    <div style={styles.logoIcon}>
                        📚🎓
                    </div>
                    <div style={styles.logoText}>
                        <h1 style={styles.logoTitle}>NS REDDY</h1>
                        <p style={styles.logoSubtitle}>Academy</p>
                    </div>
                </div>
            </div>

            {/* Main Title */}
            <h2 style={styles.mainTitle}>CHOOSE YOUR PLAN</h2>

            {/* Pricing Cards */}
            <div style={styles.pricingCards}>
                {/* Plan 1 - Facebook Ads Mastery */}
                <div style={styles.pricingCard}>
                    <h3 style={styles.planTitle}>Escape Facebook Ads Mastery</h3>
                    <div style={styles.price}>₹5499</div>
                    <p style={styles.planDescription}>
                        Get started with all the Facebook Ads knowledge you need to become a profitable advertiser.
                    </p>
                    <p style={styles.discountCode}>Use code ESC10 for 10% OFF at checkout!</p>

                    <div style={styles.features}>
                        <div style={styles.feature}>✓ Lifetime access to course</div>
                        <div style={styles.feature}>✓ Lifetime access to course content (product research not included)</div>
                        <div style={styles.feature}>✓ Facebook ads from Basics to Advanced</div>
                        <div style={styles.feature}>✓ how to run ads for Ecommerce stores</div>
                        <div style={styles.feature}>✓ Understanding KPIs</div>
                        <div style={styles.feature}>✓ Retargeting & Lookalike Audience Advertising</div>
                        <div style={styles.feature}>✓ Completely beginner friendly</div>
                        <div style={styles.feature}>✓ My Ads Scaling Strategies</div>
                        <div style={styles.featureNoAccess}>✗ No Group Access</div>
                    </div>

                    <button style={{ ...styles.buyButton, ...styles.blueButton }} onClick={() => navigate('/user-details')}>BUY NOW</button>
                </div>

                {/* Plan 2 - Complete Ecommerce Mastery */}
                <div style={styles.popularCard}>
                    <h3 style={styles.planTitle}>Escape Complete Ecommerce Mastery</h3>
                    <div style={styles.price}>₹14999</div>
                    <div style={styles.popularBadge}>most popular</div>
                    <p style={styles.planDescription}>
                        Become a Dropshipping Master with full access to the course, FB ads.
                    </p>
                    <p style={styles.discountCode}>Use code ESC10 for 10% OFF at checkout!</p>

                    <div style={styles.features}>
                        <div style={styles.feature}>✓ Full Shopify Website Designing Course</div>
                        <div style={styles.feature}>✓ Niche Selection</div>
                        <div style={styles.feature}>✓ Paypal Integration</div>
                        <div style={styles.feature}>✓ Lifetime access to course content</div>
                        <div style={styles.feature}>✓ case study & product research</div>
                        <div style={styles.feature}>✓ how to run ads for Ecommerce stores</div>
                        <div style={styles.feature}>✓ Understanding KPIs</div>
                        <div style={styles.feature}>✓ Retargeting & Lookalike Audience Marketing</div>
                        <div style={styles.feature}>✓ Facebook ads ✓</div>
                        <div style={styles.featureNoAccess}>✗ Group Access</div>
                        <div style={styles.featureNoAccess}>✗ Tiktok Ads</div>
                        <div style={styles.featureNoAccess}>✗ Access to Video Editing Course (Capcut Mobile and PC)</div>
                        <div style={styles.featureNoAccess}>✗ Access to all future Courses on Escape Academy</div>
                        <div style={styles.featureNoAccess}>✗ Revealing My Winning Products</div>
                    </div>

                    <button style={{ ...styles.buyButton, ...styles.tealButton }} onClick={() => navigate('/user-details')}>BUY NOW</button>
                </div>

                {/* Plan 3 - Domination Suite */}
                <div style={styles.pricingCard}>
                    <h3 style={styles.planTitle}>Escape Domination Suite</h3>
                    <div style={styles.price}>₹19999</div>
                    <p style={styles.planDescription}>
                        Level up your Online Moneymaking Skills like dropshipping, Video Editing, Facebook ads, Tiktok ads and many more...! you will get lifetime access to every course that is added to ESCAPE ACADEMY
                    </p>
                    <p style={styles.discountCode}>Use code ESC10 for 10% OFF at checkout!</p>

                    <div style={styles.features}>
                        <div style={styles.feature}>✓ Access to Video Editing Course (Capcut Mobile and PC)</div>
                        <div style={styles.feature}>✓ Free Access to all future Courses on Escape Academy</div>
                        <div style={styles.feature}>✓ Revealing My Winning Products</div>
                        <div style={styles.feature}>✓ Full Shopify Website Designing Course</div>
                        <div style={styles.feature}>✓ Paypal Integration</div>
                        <div style={styles.feature}>✓ Lifetime access to course content</div>
                        <div style={styles.feature}>✓ case study & product research</div>
                        <div style={styles.feature}>✓ Facebook ads from Basics to Advanced</div>
                        <div style={styles.feature}>✓ how to run ads for Ecommerce stores</div>
                        <div style={styles.feature}>✓ Understanding KPIs</div>
                        <div style={styles.feature}>✓ Retargeting & Lookalike Audience Marketing</div>
                        <div style={styles.feature}>✓ Private Group Access ✓</div>
                        <div style={styles.feature}>✓ Tiktok Ads</div>
                        <div style={styles.feature}>✓ UI/UX Design Mastery</div>
                        <div style={styles.feature}>✓ Future Access to AI Tools Mastery, Crypto, Trading, NFTs, Forex Courses</div>
                    </div>

                    <button style={{ ...styles.buyButton, ...styles.blueButton }} onClick={() => navigate('/user-details')}>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;