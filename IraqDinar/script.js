// JavaScript for toggling the menu
const menuIcon = document.getElementById('menu-icon');
const navBar = document.getElementById('nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-bar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
    });
});



// For the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Presale', 'Liquidity', 'Marketing', 'Iraqi Donation', 'Unlocked'],
        datasets: [{
            label: 'Allocation',
            data: [42.105263, 25, 15, 10, 7.894737],
            backgroundColor: [
                '#FF6384', // Presale
                '#36A2EB', // Liquidity
                '#FFCE56', // Marketing
                '#FF9AA2', // Iraqi Donation
                '#FFD700'  // Unlocked
            ],
            borderColor: '#fff',
            borderWidth:'3',
            hoverOffset: 28
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw;
                        return `${label}: ${value.toFixed(2)}%`;
                    }
                }
            },
            legend: {
                display: false 
            }
        },
        elements: {
            center: {
                text: 'IQD',
                color: '#2f2f2f',
                fontStyle: 'Arial',
                sidePadding: 20
            }
        }
    }
});




function copyToClipboard() {
    // Get the full contract address from the hidden input
    const contractAddress = document.getElementById("contract-address").value;
    
    // Copy it to the clipboard
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Show the "Copied" message
        const copiedMessage = document.getElementById("copied-message");
        copiedMessage.style.display = "block";

        
        setTimeout(() => {
            copiedMessage.style.display = "none";
        }, 2000);
    }).catch((err) => {
        console.error("Failed to copy: ", err);
    });
}

