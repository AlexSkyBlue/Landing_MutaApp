document.addEventListener('DOMContentLoaded', function() {
    // Add a smooth scroll effect for the CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });

    // Add a simple animation to team member images on hover
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

