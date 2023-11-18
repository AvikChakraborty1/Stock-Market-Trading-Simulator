'use client'

import React, {useState} from 'react';
import './Settings.css';
import { useThemeContext } from "../Context/ThemeContext.js";

import { Navbar } from "../Components/Navbar/Navbar.js";

import { ProfileSettings } from "../Components/Settings/ProfileSettings";
import { AccountSettings } from "../Components/Settings/AccountSettings";
import { PrivacySettings } from "../Components/Settings/PrivacySettings";
import { StockSettings } from "../Components/Settings/StockSettings";



export default function Settings() {
    const { darkMode } = useThemeContext();
    const [profileSettings, setProfileSettings] = useState(true);
    const [accountSettings, setAccountSettings] = useState(false);
    const [privacySettings, setPrivacySettings] = useState(false);
    const [stockSettings, setStockSettings] = useState(false);

    function changeProfile() {
        setProfileSettings(true);
        setAccountSettings(false);
        setPrivacySettings(false);
        setStockSettings(false);
    }

    function changeAccount() {
        setProfileSettings(false);
        setAccountSettings(true);
        setPrivacySettings(false);
        setStockSettings(false);
    }

    function changePrivacy() {
        setProfileSettings(false);
        setAccountSettings(false);
        setPrivacySettings(true);
        setStockSettings(false);
    }

    function changeStock() {
        setProfileSettings(false);
        setAccountSettings(false);
        setPrivacySettings(false);
        setStockSettings(true);
    }


    return(
        <div>
            <Navbar />
            <div className={`${darkMode ? "settings_page_dark" : "settings_page"}`}>
                <div className={`${darkMode ? "settings_bar_dark" : "settings_bar"}`}>
                    <div>
                        <h1 className="settings_title">Settings</h1>
                        <div className="headers">
                            <button className="settings_header" onClick={changeProfile}>
                                Profile Settings
                            </button>
                            <button className="settings_header" onClick={changeAccount}>
                                Account Settings
                            </button>
                            <button className="settings_header" onClick={changePrivacy}>
                                Privacy Settings
                            </button>
                            <button className="settings_header" onClick={changeStock}>
                                Stock Settings
                            </button>
                        </div>
                    </div>
                </div>
                {/* Below display the different pages based on the use state */}
                {profileSettings ? (
                        <ProfileSettings />
                    ) : null}
                {accountSettings ? (
                    <AccountSettings />
                ) : null}
                {privacySettings ? (
                    <PrivacySettings />
                ) : null}
                {stockSettings ? (
                    <StockSettings />
                ) : null}

            </div>
            


        </div>
    );
}