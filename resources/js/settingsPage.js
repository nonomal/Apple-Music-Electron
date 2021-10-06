try {
    function matchRuleShort(str, rule) {
        var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
    }

    if (!preferences) {
        var preferences = ipcRenderer.sendSync('getPreferences');
    }

    if (matchRuleShort(window.location.href, '*settings*') && document.getElementsByClassName('application-preferences').length === 0) {
        document.getElementsByClassName('commerce-full-content')[0].innerHTML = `
            <div class="application-preferences">
                <div class="app-prefs-section general">
                    <div class="app-prefs-title header-nav" style="height: 10px;">
                        <div class="header-nav-content">
                            <h1 class="typography-header-emphasized">General Settings</h1>
                        </div>
                    </div>
                    <ul class="settings-list general">
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Choose a language for the system to use</span>
                            <select class="form-dropdown-select list-element" name="language" id="language">
                                <option disabled>Select one</option>
                                <option value='us'>English (US)</option>
                                <option value='gb'>English (UK)</option>
                                <option value='ae'>United Arab Emirates</option>
                                <option value='ag'>Antigua and Barbuda</option>
                                <option value='ai'>Anguilla</option>
                                <option value='al'>Albania</option>
                                <option value='am'>Armenia</option>
                                <option value='ao'>Angola</option>
                                <option value='ar'>Argentina</option>
                                <option value='at'>Austria</option>
                                <option value='au'>Australia</option>
                                <option value='az'>Azerbaijan</option>
                                <option value='bb'>Barbados</option>
                                <option value='be'>Belgium</option>
                                <option value='bf'>Burkina-Faso</option>
                                <option value='bg'>Bulgaria</option>
                                <option value='bh'>Bahrain</option>
                                <option value='bj'>Benin</option>
                                <option value='bm'>Bermuda</option>
                                <option value='bn'>Brunei Darussalam</option>
                                <option value='bo'>Bolivia</option>
                                <option value='br'>Brazil</option>
                                <option value='bs'>Bahamas</option>
                                <option value='bt'>Bhutan</option>
                                <option value='bw'>Botswana</option>
                                <option value='by'>Belarus</option>
                                <option value='bz'>Belize</option>
                                <option value='ca'>Canada</option>
                                <option value='cg'>Democratic Republic of the Congo</option>
                                <option value='ch'>Switzerland</option>
                                <option value='cl'>Chile</option>
                                <option value='cn'>China</option>
                                <option value='co'>Colombia</option>
                                <option value='cr'>Costa Rica</option>
                                <option value='cv'>Cape Verde</option>
                                <option value='cy'>Cyprus</option>
                                <option value='cz'>Czech Republic</option>
                                <option value='de'>Germany</option>
                                <option value='dk'>Denmark</option>
                                <option value='dm'>Dominica</option>
                                <option value='do'>Dominican Republic</option>
                                <option value='dz'>Algeria</option>
                                <option value='ec'>Ecuador</option>
                                <option value='ee'>Estonia</option>
                                <option value='eg'>Egypt</option>
                                <option value='es'>Spain</option>
                                <option value='fi'>Finland</option>
                                <option value='fj'>Fiji</option>
                                <option value='fm'>Federated States of Micronesia</option>
                                <option value='fr'>France</option>
                                <option value='gd'>Grenada</option>
                                <option value='gh'>Ghana</option>
                                <option value='gm'>Gambia</option>
                                <option value='gr'>Greece</option>
                                <option value='gt'>Guatemala</option>
                                <option value='gw'>Guinea Bissau</option>
                                <option value='gy'>Guyana</option>
                                <option value='hk'>Hong Kong</option>
                                <option value='hn'>Honduras</option>
                                <option value='hr'>Croatia</option>
                                <option value='hu'>Hungaria</option>
                                <option value='id'>Indonesia</option>
                                <option value='ie'>Ireland</option>
                                <option value='il'>Israel</option>
                                <option value='in'>India</option>
                                <option value='is'>Iceland</option>
                                <option value='it'>Italy</option>
                                <option value='jm'>Jamaica</option>
                                <option value='jo'>Jordan</option>
                                <option value='jp'>Japan</option>
                                <option value='ke'>Kenya</option>
                                <option value='kg'>Krygyzstan</option>
                                <option value='kh'>Cambodia</option>
                                <option value='kn'>Saint Kitts and Nevis</option>
                                <option value='kr'>South Korea</option>
                                <option value='kw'>Kuwait</option>
                                <option value='ky'>Cayman Islands</option>
                                <option value='kz'>Kazakhstan</option>
                                <option value='la'>Laos</option>
                                <option value='lb'>Lebanon</option>
                                <option value='lc'>Saint Lucia</option>
                                <option value='lk'>Sri Lanka</option>
                                <option value='lr'>Liberia</option>
                                <option value='lt'>Lithuania</option>
                                <option value='lu'>Luxembourg</option>
                                <option value='lv'>Latvia</option>
                                <option value='md'>Moldova</option>
                                <option value='mg'>Madagascar</option>
                                <option value='mk'>Macedonia</option>
                                <option value='ml'>Mali</option>
                                <option value='mn'>Mongolia</option>
                                <option value='mo'>Macau</option>
                                <option value='mr'>Mauritania</option>
                                <option value='ms'>Montserrat</option>
                                <option value='mt'>Malta</option>
                                <option value='mu'>Mauritius</option>
                                <option value='mw'>Malawi</option>
                                <option value='mx'>Mexico</option>
                                <option value='my'>Malaysia</option>
                                <option value='mz'>Mozambique</option>
                                <option value='na'>Namibia</option>
                                <option value='ne'>Niger</option>
                                <option value='ng'>Nigeria</option>
                                <option value='ni'>Nicaragua</option>
                                <option value='nl'>Netherlands</option>
                                <option value='np'>Nepal</option>
                                <option value='no'>Norway</option>
                                <option value='nz'>New Zealand</option>
                                <option value='om'>Oman</option>
                                <option value='pa'>Panama</option>
                                <option value='pe'>Peru</option>
                                <option value='pg'>Papua New Guinea</option>
                                <option value='ph'>Philippines</option>
                                <option value='pk'>Pakistan</option>
                                <option value='pl'>Poland</option>
                                <option value='pt'>Portugal</option>
                                <option value='pw'>Palau</option>
                                <option value='py'>Paraguay</option>
                                <option value='qa'>Qatar</option>
                                <option value='ro'>Romania</option>
                                <option value='ru'>Russia</option>
                                <option value='sa'>Saudi Arabia</option>
                                <option value='sb'>Soloman Islands</option>
                                <option value='sc'>Seychelles</option>
                                <option value='se'>Sweden</option>
                                <option value='sg'>Singapore</option>
                                <option value='si'>Slovenia</option>
                                <option value='sk'>Slovakia</option>
                                <option value='sl'>Sierra Leone</option>
                                <option value='sn'>Senegal</option>
                                <option value='sr'>Suriname</option>
                                <option value='st'>Sao Tome e Principe</option>
                                <option value='sv'>El Salvador</option>
                                <option value='sz'>Swaziland</option>
                                <option value='tc'>Turks and Caicos Islands</option>
                                <option value='td'>Chad</option>
                                <option value='th'>Thailand</option>
                                <option value='tj'>Tajikistan</option>
                                <option value='tm'>Turkmenistan</option>
                                <option value='tn'>Tunisia</option>
                                <option value='tr'>Turkey</option>
                                <option value='tt'>Republic of Trinidad and Tobago</option>
                                <option value='tw'>Taiwan</option>
                                <option value='tz'>Tanzania</option>
                                <option value='ua'>Ukraine</option>
                                <option value='ug'>Uganda</option>
                                <option value='uy'>Uruguay</option>
                                <option value='uz'>Uzbekistan</option>
                                <option value='vc'>Saint Vincent and the Grenadines</option>
                                <option value='ve'>Venezuela</option>
                                <option value='vg'>British Virgin Islands</option>
                                <option value='vn'>Vietnam</option>
                                <option value='ye'>Yemen</option>
                                <option value='za'>South Africa</option>
                                <option value='zw'>Zimbabwe</option>
                            </select>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">You will need to restart the application for language settings to apply.</span>
                        </li>
                        <li class="app-prefs-toggle">
                            <span class="typography-title-3-tall">Incognito Mode</span>
                            <label class="toggle-element list-element">
                                <input id="incognitoMode" type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">When enabled the application will hide all song details and information from all receivers. (Discord RPC, LastFM, Apple)</span>
                        </li>
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Show notifications on Song Change</span>
                            <select class="form-dropdown-select list-element" name="playbackNotifications" id="playbackNotifications">
                                <option disabled>Select one</option>
                                <option value=''>Disabled</option>
                                <option value=true>Enabled</option>
                                <option value='minimized'>Enabled (Notifications when Minimized)</option>
                            </select>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">Enabling this means you will get notifications when you change song. The minimized option forces notifications to only appear if the app is hidden / minimized.</span>
                        </li>
                        <li class="app-prefs-toggle">
                            <span class="typography-title-3-tall">Show song name as tray icon tooltip</span>
                            <label class="toggle-element list-element">
                                <input id="trayTooltipSongName" type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">Enabling this option allows you to see the song name in the tooltip on the taskbar when the application is minimized to the tray.</span>
                        </li>
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Startup page</span>
                            <select class="form-dropdown-select list-element" name="startupPage" id="startupPage">
                                <option disabled>Select one</option>
                                <option value='browse'>Browse</option>
                                <option value='listen-now'>Listen now</option>
                                <option value='radio'>Radio</option>
                                <option value='library/recently-added'>Recently Added</option>
                                <option value='library/albums'>Albums</option>
                                <option value='library/songs'>Songs</option>
                                <option value='library/made-for-you'>Made for You</option>
                            </select>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">Select what page you wish to be placed on when you start the application.</span>
                        </li>
                        <li class="app-prefs-toggle">
                            <span class="typography-title-3-tall">Allow statistics to be collected when errors or crashes occur</span>
                            <label class="toggle-element list-element">
                                <input id="analyticsEnabled" type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">These logs when enabled allow us to fix bugs and errors that may occur during your listening sessions to better improve the application. We understand if you're not comfortable with them on, but it helps us out immensely in figuring out widespread issues. (Note: We do not gather personal information, only stuff that shows to you as an error in the code.)</span>
                        </li>
                        <li class="app-prefs-divider header-nav">
                            <h2 class="shelf-title">Discord Rich Presence</h2>
                            <span class="app-prefs-help typography-title-3-tall">These settings are for managing how you display your status on Discord. You must have 'Display current activity as status message.' turned on in your Discord settings for the song to be shown.</span>
                        </li>
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Display song data as activity on Discord</span>
                            <select class="form-dropdown-select list-element" name="discordRPC" id="discordRPC">
                                <option disabled>Select one</option>
                                <option value='am-title'>Enabled (Display 'Apple Music' as title)</option>
                                <option value='ame-title'>Enabled (Display 'Apple Music Electron' as title)</option>
                                <option value=''>Disabled</option>
                            </select>
                            </label>
                        </li>
                        <li class="app-prefs-toggle">
                            <span class="typography-title-3-tall">Clear activity on pause</span>
                            <label class="toggle-element list-element">
                                <input id="discordClearActivityOnPause" type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">With this disabled your status will show a Pause/Play icon whenever you are playing or have a song paused. When you enable this, it is replaced with a branch icon (Nightly / Stable) and a version title when you hover.</span>
                        </li>
                        <li class="app-prefs-divider header-nav">
                            <h2 class="shelf-title">LastFM</h2>
                            <span class="app-prefs-help typography-title-3-tall">For information regarding this section, read the wiki post found <a href="#" onclick='window.open("https://github.com/cryptofyre/Apple-Music-Electron/wiki/LastFM")'>here</a>.</span>
                        </li>
                        <li class="app-prefs-lastfm-connect">
                            <span class="typography-title-3-tall">LastFM Account</span>
                            <label id="lfmConnect" class="connect-button list-element" onclick="LastFMAuthenticate()">Connect</label>
                        </li>
                        <li class="app-prefs-toggle">
                            <span class="typography-title-3-tall">Remove featuring artists from song title</span>
                            <label class="toggle-element list-element">
                                <input id="lastfmRemoveFeaturingArtists" type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">Enabling this will remove the featuring artists from the scrobbled data, meaning on LastFM only the primary artist will be shown.</span>
                        </li>
                    </ul>
                </div>
                <div class="app-prefs-section visual">
                    <div class="app-prefs-title header-nav" style="height: 10px;">
                        <div class="header-nav-content">
                            <h1 class="typography-header-emphasized">Visual Settings</h1>
                        </div>
                    </div>
                    <ul class="settings-list visual">
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Theme</span>
                            <select class="form-dropdown-select list-element" name="theme" id="theme">
                                <option disabled>Select one</option>
                                <option value='default'>Default</option>
                            </select>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">You will need to restart the application in order for the default themes to be populated. You can preview all the themes <a href="#" onclick="window.open('https://github.com/Apple-Music-Electron/Apple-Music-Electron/wiki/Theme-Preview-Images')">here</a>.</span>
                        </li>
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Application Frame</span>
                            <select class="form-dropdown-select list-element" name="frameType" id="frameType">
                                <option disabled>Select one</option>
                                <option value=''>Disabled</option>
                                <option value='mac-right'>macOS Emulation (Right)</option>
                                <option value='mac'>macOS Emulation</option>
                            </select>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">macOS Emulation shows the 'stoplights' that are well known for all mac users and adjusts other UI elements to resemble the macOS Music App. Selecting the right option shows a more Windows-like representation with the stoplights replacing the usual close, minimize and maximize buttons. For mac users its suggested that you disable this for the best experience. Having this disabled will make the application use the operating system's frame.</span>
                        </li>
                        <li class="app-prefs-divider header-nav">
                            <h2 class="shelf-title">Transparency Configuration</h2>
                            <span class="app-prefs-help typography-title-3-tall">Here you can configure the transparency options for the window. Transparency only works on certain systems, so read the descriptions of each setting. It is not advised to use transparency on platforms other than Windows or macOS.</span>
                        </li>
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Transparency Effect</span>
                            <select class="form-dropdown-select list-element" name="transparencyEffect" id="transparencyEffect">
                                <option disabled>Select one</option>
                                <option value=''>Disabled</option>
                                <option value='blur'>Blur Behind</option>
                            </select>
                            </label>
                            <span class="app-prefs-help typography-title-3-tall">Sets the type of Windows transparency effect, either 'acrylic', 'blur' or leave it empty to disable it. Changing the transparency blur type can improve performance and compatibility with older hardware and systems.</span>
                        </li>
                        <li class="app-prefs-dropdown">
                            <span class="typography-title-3-tall">Transparency Theme</span>
                            <input class="form-dropdown-select list-element" name="transparencyTheme" id="transparencyTheme"/>
                            <span class="app-prefs-help typography-title-3-tall">Sets the type of Windows transparency effect, either 'acrylic', 'blur' or leave it empty to disable it. Changing the transparency blur type can improve performance and compatibility with older hardware and systems.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        let ThemesListing = document.getElementById('theme').innerHTML;
        for (const [key, value] of Object.entries(preferences.availableThemes)) {
            ThemesListing = ThemesListing + `\n<option value="${key}">${value}</option>`;
        }
        document.getElementById('theme').innerHTML = ThemesListing;

        if (preferences.supportsAcrylic) {
            document.getElementById('transparencyEffect').innerHTML = document.getElementById('transparencyEffect').innerHTML + "\n<option value='acrylic'>Acrylic (W10 1809+)</option>";
        }

        function LastFMDeauthorize() {
            preferences.general.lastfmAuthKey = 'Put your Auth Key here.';
            preferences.general.lastfmEnabled = [];
            ipcRenderer.sendSync('setPreferences', preferences );
            const element = document.getElementById('lfmConnect');
            element.innerHTML = 'Connect';
            element.onclick = LastFMAuthenticate;
        }
        function LastFMAuthenticate() {
            const element = document.getElementById('lfmConnect');
            preferences.general.lastfmEnabled = [true];
            window.open('LastFMLink');
            element.innerText = 'Connecting...'

            /* Get the callback and set preferences.general.lastfmAuthKey to it

            ipcRenderer.sendSync('setPreferences', preferences );


            element.innerHTML = `
                    Disconnect
                    <p style="font-size: 8px"><i>(Authed: ${preferences.general.lastfmAuthKey})</i></p>
                    `;
            element.onclick = LastFMDeauthorize;*/
        }

        function hasParentClass(child, classname){
            if(child.className.split(' ').indexOf(classname) >= 0) return true;
            try{
                return child.parentNode && hasParentClass(child.parentNode, classname);
            }catch(TypeError){
                return false;
            }
        }
        function HandleField(element) {
            const field = document.getElementById(element);
            if (!field) return 'Element Not Found';

            let fieldCategory;
            if (hasParentClass(field, 'general')) {
                fieldCategory = preferences.general;
            } else if (hasParentClass(field, 'visual')) {
                fieldCategory = preferences.visual;
            } else if (hasParentClass(field, 'audio')) {
                fieldCategory = preferences.audio;
            } else if (hasParentClass(field, 'window')) {
                fieldCategory = preferences.window;
            } else if (hasParentClass(field, 'advanced')) {
                fieldCategory = preferences.advanced;
            } else {
                console.log('[HandleField] No Parent Category Found.');
                return 'No Parent Category Found';
            }

            if (hasParentClass(field, 'toggle-element')) {
                /* Toggles */
                field.checked = fieldCategory[element].includes(true);
                field.addEventListener('change', (event) => {
                    fieldCategory[element] = (event.target.checked ? [true] : []);
                    ipcRenderer.sendSync('setPreferences', preferences );
                });
            }
            else if (field.classList.contains('form-dropdown-select')) {
                /* Dropdowns */
                field.value = fieldCategory[element];
                field.addEventListener('change', (event) => {
                    fieldCategory[element] = event.target.value;
                    ipcRenderer.sendSync('setPreferences', preferences );
                });
            }
            else if (field.classList.contains('connect-button')) {
                if (preferences.general.lastfmAuthKey !== 'Put your Auth Key here.' && preferences.general.lastfmAuthKey) {
                    field.innerHTML = `Disconnect\n<p style="font-size: 8px"><i>(Authed: ${preferences.general.lastfmAuthKey})</i></p>`;
                    field.onclick = LastFMDeauthorize;
                }
            }
        }

        /* General Settings */
        HandleField('language');
        HandleField('incognitoMode');
        HandleField('playbackNotifications');
        HandleField('trayTooltipSongName');
        HandleField('startupPage');
        HandleField('analyticsEnabled');
        HandleField('discordRPC');
        HandleField('discordClearActivityOnPause');
        HandleField('lfmConnect');
        HandleField('lastfmRemoveFeaturingArtists');

        /* Visual Settings */
        HandleField('theme');
        HandleField('frameType');
        HandleField('transparencyEffect');
        HandleField('transparencyTheme');
    }

} catch (e) {
    console.error("[JS] Error while trying to apply settingsPage.js", e);
}