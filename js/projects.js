/**
 * Portfolio content — edit this file to reorder projects or swap images.
 *
 * REORDER PROJECTS: Move a whole block up or down in the `projects` array.
 *   The order here is the order shown on the website.
 *
 * CHANGE A PROJECT'S COVER IMAGE: Put the image you want first in that
 *   project's `images` array. The first entry is the thumbnail on the card.
 *
 * MOVE AN IMAGE TO A DIFFERENT PROJECT: Cut the path from one `images` array
 *   and paste it into another project's `images` array.
 *
 * ADD A NEW IMAGE: Drop the file in assets/images/, then add its path to the
 *   right project's `images` array (e.g. "assets/images/my-photo.jpg").
 *
 * HERO PHOTO: Change `hero.image` at the top of this file.
 */
const PORTFOLIO = {
  hero: {
    image: "assets/images/cover-pic.jpg",
    alt: "Singing",
  },

  projects: [
    {
      images: [
        "assets/images/rev11.jpg",
        "assets/images/rev11_testing.jpg",
        "assets/images/on-track.jpg",
        "assets/images/tilt-pic.jpg",
        "assets/images/substack.jpeg",
        "assets/images/drivetrain.jpeg",
        "assets/images/chassis-jig.jpeg",

      ],
      tag: "Penn Electric Racing",
      date: "2025–2026",
      title: "REV 11 Mechanical",
      description:
        "Led 60+ engineers in the design and manufacturing of REV 11. Best team placement in 7 years, including 6th overall in Design at competition. Design completed 1 week ahead of schedule; first drive 2/12/26 — earliest in team history.",
      tools: ["Technical Program Management", "Electromechanical Integration", "Hardware + Sensor Integration", "Battery Design"],
    },
    {
      images: [
        "assets/images/REVX_driversystems.png",
        "assets/images/pedal_box.jpg",
        "assets/images/REVX_manufacturing.jpg",
        "assets/images/driversystems.png",
        "assets/images/mockpit.jpg",
        "assets/images/driversystems (2).png",
        "assets/images/driversystems (3).png",
        "assets/images/driversystems (4).png",
        "assets/images/REVX.jpg",
      ],
      tag: "Driver Systems",
      date: "2024–2025",
      title: "REV 10 Driver Systems",
      description:
        "Led steering, acceleration, braking, and ergonomics. Top 10 in Design at 2025 competition. Decreased chassis mass by 4 lbs through validated ergonomic configuration.",
      tools: ["Structural Simulation", "Thermal Simulation", "Enclosure Design", "System Packaging", "Vehicle Dynamics"],
    },
    {
      images: [
        "assets/images/stirlingengine (2).png",
        "assets/images/stirlingengine (3).jpg",
        "assets/images/stirlingengine3.png",
        "assets/images/stirlingengine4.jpg",
        "assets/images/stirlingengine.jpg",
      ],
      tag: "Machining",
      date: "2024",
      title: "Stirling Engine",
      description:
        "Designed 20+ custom components with GD&T drawings in SolidWorks. Fabricated via CNC milling, lathing, and manual machining — peak speed of 1400 RPM.",
      tools: ["MasterCAM", "GD&T", "CNC Mill / Lathe", "DFM", "DFA"],
    },
    {
      images: [
        "assets/images/adapt1.jpg",
        "assets/images/adapt2.png",
        "assets/images/adapt.png",
      ],
      tag: "Assistive Tech",
      date: "2023",
      title: "Penn ADAPT Switch Interface",
      description:
        "Designed switch interface circuits for local high school students with cerebral palsy. 3D-printed waterproof, impact-absorbent enclosures tested iteratively with students.",
      tools: ["Circuit Design", "Rapid Prototyping", "IP Enclosure"],
    },
    {
      images: [
        "assets/images/composites.jpg",
        "assets/images/composites (2).jpg",
        "assets/images/composites (3).jpg",
        "assets/images/composites (4).jpg",
        "assets/images/composites (5).jpg",
      ],
      tag: "Composites",
      date: "2024–2025",
      title: "Composites Work",
      description:
        "In-house and facility layups for bodywork, nosecone, side wings, rear wing, and front wing. Vacuum-bag infusion with carbon fiber, copper mesh, and peel ply.",
      tools: ["Carbon Fiber Manufacturing", "Infusion Layups", "Vacuum Bagging"],
    },
    {
      images: [
        "assets/images/membrane_testing3.jpg",
        "assets/images/membrane_testing.jpg",
        "assets/images/membrane_testing2.jpg",
        "assets/images/membranetesting.jpg",
      ],
      tag: "ModLab Research",
      date: "2024–2025",
      title: "Membrane Testing",
      description:
        "Built Arduino pneumatic test rig with ML-guided experiment selection. Reduced experiment runtime from 1.5 hours to 30 minutes — 3× more experiments per session.",
      tools: ["Arduino", "Actuators"],
    },
    {
      images: [
        "assets/images/steeringwheel2.png",
        "assets/images/steeringwheel.png",
        "assets/images/steeringwheel (2).png",
      ],
      tag: "CAD / FEA",
      date: "2024–2025",
      title: "Steering Wheel",
      description:
        "Carbon fiber-foam sandwich plate selected via Ashby chart. 3D-printed ergonomic grips fit to drivers; quick-release integration with full-car FEA validation.",
      tools: ["SolidWorks", "FEA", "Carbon Fiber Manufacturing"],
    },
  ],
};
