const introScreen = document.getElementById('introScreen');
const portfolio = document.getElementById('portfolio');
const enterButton = document.getElementById('enterPortfolio');
const skipButton = document.getElementById('skipIntro');
const projectDialog = document.getElementById('projectDialog');
const closeDialog = document.getElementById('closeDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogType = document.getElementById('dialogType');
const dialogDescription = document.getElementById('dialogDescription');
const dialogTags = document.getElementById('dialogTags');

const projects = {
    identity: {
        title: 'Idira Identity',
        type: 'CURRENT · PALO ALTO NETWORKS',
        description: 'Enterprise identity capabilities across authentication, service-provider and identity-provider federation, connector integrations, and enterprise administration. The platform work spans OAuth 2.0, OIDC, SAML, ESSO/PSSO, FIDO2/WebAuthn, and directory integrations.',
        tags: ['Identity platform', 'Federation', 'Entra ID', 'Google Active Directory', 'Connectors']
    },
    mobile: {
        title: 'Idira Mobile',
        type: 'CURRENT · PALO ALTO NETWORKS',
        description: 'Secure enterprise mobile experience for remote access and vendor management. Work includes identity-aware access workflows, external user and vendor lifecycle management, credentials, device-aware security, and administration from secure mobile endpoints.',
        tags: ['Remote access', 'Vendor management', 'Device management', 'Enterprise mobile']
    },
    authenticator: {
        title: 'Idira Authenticator',
        type: 'CURRENT · PALO ALTO NETWORKS',
        description: 'Secure authentication experiences across enrollment, device binding, MFA, passwordless authentication, and authentication lifecycle management for enterprise endpoint access.',
        tags: ['MFA', 'Passwordless', 'Device binding', 'FIDO2', 'WebAuthn']
    },
    sdk: {
        title: 'Idira Identity SDK',
        type: 'PLATFORM · SDK',
        description: 'Reusable identity and authentication foundation supporting Idira endpoint experiences across Apple platforms. The SDK provides shared sign-in, federation, authentication lifecycle, and platform integration patterns.',
        tags: ['SDK architecture', 'iOS', 'iPadOS', 'macOS', 'OAuth 2.0', 'OIDC']
    },
    cyberark: {
        title: 'CyberArk Mobile & Identity',
        type: 'PREVIOUS · CYBERARK',
        description: 'Earlier work on CyberArk Mobile and CyberArk Identity, delivering secure mobile and enterprise identity capabilities across authentication, PAM/IAM-aligned architecture, offline data, autofill, and identity federation.',
        tags: ['CyberArk Mobile', 'CyberArk Identity', 'PAM', 'IAM', 'Secure mobile']
    }
};

function showPortfolio() {
    introScreen.classList.add('is-hidden');
    portfolio.hidden = false;
    document.body.classList.remove('intro-active');
    sessionStorage.setItem('portfolio-v3-intro-seen', 'true');
}

document.body.classList.add('intro-active');
if (sessionStorage.getItem('portfolio-v3-intro-seen') === 'true') showPortfolio();
enterButton.addEventListener('click', showPortfolio);
skipButton.addEventListener('click', showPortfolio);

document.querySelectorAll('[data-project]').forEach((card) => {
    card.addEventListener('click', () => {
        const project = projects[card.dataset.project];
        if (!project) return;
        dialogType.textContent = project.type;
        dialogTitle.textContent = project.title;
        dialogDescription.textContent = project.description;
        dialogTags.replaceChildren(...project.tags.map((tag) => {
            const element = document.createElement('span');
            element.textContent = tag;
            return element;
        }));
        projectDialog.showModal();
    });
});

closeDialog.addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', (event) => {
    if (event.target === projectDialog) projectDialog.close();
});
