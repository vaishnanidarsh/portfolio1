export const HERO_CONFIG = {
  // Reveal artwork physics
  REVEAL_RADIUS_DESKTOP: 220,
  REVEAL_RADIUS_MOBILE: 140,
  REVEAL_SMOOTHNESS: 0.12, // Lerp smoothing factor for cursor tracking
  REVEAL_FEATHER: 60, // Feathering blur edge in px
  HERO_PARALLAX_TILT: 12, // Degrees of 3D tilt on artwork hover
  
  // Hands section scroll & parallax
  HAND_SCROLL_HEIGHT_VH: 220, // Dedicated cinematic scroll section height in vh (180vh-240vh)
  HAND_CURSOR_INFLUENCE_X: 18, // Secondary subtle mouse parallax max ±18px
  HAND_CURSOR_INFLUENCE_Y: 14, // Secondary subtle mouse parallax max ±14px
  HAND_START_OFFSET_VW: 125, // Initial offscreen position in vw (completely outside viewport)
  HAND_FINAL_GAP_PX: 28, // Near-touch gap between fingertips at 100% scroll
  
  // Asset paths
  DEFAULT_ASSETS: {
    image2: '/2.png', // Hero initial state (dark/black packaged head)
    image1: '/1.png', // Reveal state (green organic packaged head)
    leftHand: '/lh.png', // Adam's arm from left
    rightHand: '/rh.png', // God's arm from right
  },
  
  // Editorial content
  DESIGNER_NAME: 'DARSH VAISHNANI',
  ROLE_TITLE: 'DIGITAL DESIGNER & CREATIVE TECHNOLOGIST',
  HERO_HEADLINE: {
    line1: 'DESIGN',
    line2: 'MEETS',
    line3: 'TECHNOLOGY',
  },
  HANDS_HEADLINE: 'WHERE DESIGN MEETS TECHNOLOGY',
  HANDS_SUBTITLE: 'CREATING CONNECTIONS BETWEEN IDEAS & SYSTEMS',
};
