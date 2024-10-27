let coinCount = 0;
let coinsPerClick = 10;
let friends = [];
const rankDisplay = document.getElementById('rankDisplay');
const coinCountDisplay = document.getElementById('coinCount');
const coinImage = document.getElementById('coin');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeSection = document.getElementById('upgradeSection');
const referralLinkInput = document.getElementById('referralLink');
const friendsList = document.getElementById('friendsList');
const leaderboardList = document.getElementById('leaderboard');
const generateLinkButton = document.getElementById('generateLinkButton');

function updateRank() {
    if (coinCount >= 10000000) {
        rankDisplay.innerText = "Rank: Master Tapper";
    } else if (coinCount >= 1000000) {
        rankDisplay.innerText = "Rank: Platinum";
    } else if (coinCount >= 100000) {
        rankDisplay.innerText = "Rank: Gold";
    } else if (coinCount >= 10000) {
        rankDisplay.innerText = "Rank: Silver";
    } else {
        rankDisplay.innerText = "Rank: bronze";
    }
}

coinImage.addEventListener('click', () => {
    coinCount += coinsPerClick;
    coinCountDisplay.innerText = `Tangalar: ${coinCount}`;
    updateRank();
});

upgradeButton.addEventListener('click', () => {
    upgradeSection.style.display = upgradeSection.style.display === 'none' ? 'block' : 'none';
});

document.querySelectorAll('.upgrade').forEach(button => {
    button.addEventListener('click', () => {
        const cost = parseInt(button.getAttribute('data-cost'));
        const additionalCoins = parseInt(button.getAttribute('data-coins'));

        if (coinCount >= cost) {
            coinCount -= cost;
            coinsPerClick += additionalCoins;
            coinCountDisplay.innerText = `Tangalar: ${coinCount}`;
            updateRank();
        } else {
            alert('Tangalar yetarli emas!');
        }
    });
});

// Silka yaratish va dostlar qoshish
generateLinkButton.addEventListener('click', () => {
    const referralLink = `https://127.0.0.1:5500/index.html/referral/${Math.random().toString(36).substring(7)}`;
    referralLinkInput.value = referralLink;
});

function addFriend(friendName) {
    friends.push(friendName);
    friendsList.innerHTML = '';
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.innerText = friend;
        friendsList.appendChild(li);
    });
    coinCount += 100000; // Mukofot 100,000 tanga
    coinCountDisplay.innerText = `Tangalar: ${coinCount}`;
    updateRank();
}

// Leaderboard yangilash
function updateLeaderboard(topPlayers) {
    leaderboardList.innerHTML = '';
    topPlayers.forEach((player, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${player.name} - ${player.coins} Tangalar`;
        leaderboardList.appendChild(li);
    });
}

// Test uchun top 50
const topPlayers = Array.from({ length: 50 }, (_, i) => ({
    name: `Player${i + 1}`,
    coins: Math.floor(Math.random() * 100000000)
}));

updateLeaderboard(topPlayers);
