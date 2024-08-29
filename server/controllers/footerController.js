// controllers/footerController.js

exports.getFooterData = (req, res) => {
    const footerData = {
      abstract: ["Branches"],
      resources: ["Blog", "Help Center", "Release Notes", "Status"],
      community: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"],
      company: ["About Us", "Career", "Legal", "Contact Us", "info@abstract.com"]
    };
  
    res.status(200).json({
      success: true,
      data: footerData
    });
  };
  