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
 *
 * DETAILS (shown in the expanded card view, opened on hover/click):
 *   `details` is a list of longer bullet points. If you leave it out (or
 *   empty), the modal just falls back to showing `description`.
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
        "assets/images/on-track.JPG",
        "assets/images/tilt-pic.jpg",
        "assets/images/substack.jpeg",
        "assets/images/drivetrain.jpeg",
        "assets/images/chassis-jig.jpeg",

      ],
      tag: "Penn Electric Racing",
      date: "2025–2026",
      title: "REV 11 Mechanical",
      description:
        "Led 60+ engineers in the design and manufacturing of REV 11. Best team placement in 7 years, including 6th overall in Design at competition. Design completed 1 week ahead of schedule; first drive 2/12/26 — earliest in team history, 170+ miles driven.",
      details: [
        "Technical Program Manager for 60+ engineers across 6 subsystems: drivetrain, battery, chassis, aerodynamics, suspension, and vehicle dynamics.",
        "Set the powertrain architecture to prioritize modularity and serviceability, improving long-term vehicle reliability.",
        "Designed critical components across the vehicle, including the cell module enclosure, steering system, drivetrain mounting, and chassis tabs.",
        "Managed electromechanical integration for the powertrain modules, tractive system, wiring harnesses, and 30+ sensors.",
        "Coordinated GD&T, integration, and DFM/DFA reviews in CAD, cutting fabrication time on complex assemblies by 40%.",
      ],
      tools: ["Technical Program Management", "Electromechanical Design", "Hardware + Sensor Integration", "Battery Design"],
    },
    {
      images: [
        "assets/images/maglev-cover.jpeg",
        "assets/images/maglev-full.jpeg",
        "assets/images/maglev-screen.jpg",
        "assets/images/maglev-levitating.jpg",
      ],
      tag: "Maglev Train",
      date: "2026",
      title: "Maglev Train",
      description:
        "Custom designed and manufactured Maglev train with screen + joystick for user control (calibration, sensing, and operating modes). Built with electromagnets for propulsion and ToF sensors for  precise control.",
      details: [
        "Designed the train in two halves: a lower section with magnets that ride steady against the track, and an upper section with magnets that interact with 24 ceiling-mounted electromagnets.",
        "Built a screen and joystick interface for live control, covering calibration, sensing, and multiple operating modes.",
        "Placed time-of-flight (ToF) sensors along the track so the Arduino-based controller could continuously read the train's position.",
        "Programmed the control system to flip electromagnet polarity based on ToF readings, letting a joystick command the train left or right.",
      ],
      tools: ["UX Design", "Sensor Integration", "Magnetism", "Wiring", "3D Print Tolerancing"],
    },
    {
      images: [
        "assets/images/REVX_driversystems.png",
        "assets/images/rev11-design.JPG",
        "assets/images/pedal_box.jpg",
        "assets/images/REVX_manufacturing.jpg",
        "assets/images/driversystems.png",
        "assets/images/mockpit.jpg",
        "assets/images/driversystems (2).png",
        "assets/images/driversystems (3).png",
        "assets/images/driversystems (4).png",
        "assets/images/REVX.jpg",
      ],
      tag: "Penn Electric Racing",
      date: "2024–2025",
      title: "REV 10 Driver Systems",
      description:
        "Principle engineer for steering, acceleration, braking, and ergonomics. Top 10 in Design at 2025 competition. Decreased chassis mass by 4 lbs through validated ergonomic configuration.",
      details: [
        "Project manager for Driver Systems, covering the cockpit, pedal box, brakes, and steering.",
        "Designed the cockpit from an in-house mock-up and RAMSIS ergonomics software, introduced to the team for the first time, and quantified the driver CG-vs-mass tradeoff to set the final configuration.",
        "Ran structural and thermal FEA on the brake rotors in SolidWorks with dynamic thermal parameters, iterating toward the lightest rotors that wouldn't overheat under maximum conditions.",
        "Designed the full pedal box assembly and validated it with structural analysis to confirm it wouldn't fail under maximum loading.",
        "Machined the entire pedal box assembly in-house (~40 hours on the mill and lathe) and assembled the brake lines, rotors, carbon-fiber seat layup, and pedal box.",
        "Placed top 10 in the Design Event at the 2025 competition with a first-principles-based design.",
      ],
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
      details: [
        "Designed the engine in SolidWorks, starting from preliminary part drawings and developing custom components such as the connecting rods and flywheel.",
        "Machined the majority of the parts in-house — including the mounting block, hub, heat sink, connecting rods, and output shaft — in aluminum, steel, and brass.",
        "Built hands-on lathe, mill, CNC operation, and GD&T skills through the manufacturing process.",
        "The finished engine ran at a peak speed of 1,400 RPM.",
      ],
      tools: ["MasterCAM", "GD&T", "CNC Mill / Lathe", "DFM", "DFA"],
    },
    {
      images: [
        "assets/images/adapt1.jpg",
        "assets/images/adapt2.png",
        "assets/images/adapt.png",
      ],
      tag: "Assistive Tech",
      date: "2024",
      title: "Penn ADAPT Switch Interface",
      description:
        "Designed switch interface circuits for local high school students with cerebral palsy. 3D-printed waterproof, impact-absorbent enclosures tested iteratively with students.",
      details: [
        "Served as circuit architect for the switch interface, designing, routing, and soldering the PCBs by hand.",
        "Built 3D-printed enclosures optimized for ingress protection, impact resistance, non-flammability, and insulation.",
        "Tested iteratively with local high school students with cerebral palsy to refine fit, durability, and usability.",
      ],
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
      tag: "Penn Electric Racing",
      date: "2024–2026",
      title: "Composites Work",
      description:
        "In-house and facility layups for bodywork, nosecone, side wings, rear wing, and front wing. Vacuum-bag infusion with carbon fiber, copper mesh, and peel ply.",
      details: [
        "Ran both in-house and facility layups for bodywork, the nosecone, side wings, rear wing, and front wing.",
        "Used vacuum-bag infusion with carbon fiber, copper mesh, and peel ply to produce lightweight, high-strength panels.",
        "Refined the layup process over multiple seasons to improve surface finish and reduce voids.",
      ],
      tools: ["Carbon Fiber Manufacturing", "Infusion Layups", "Vacuum Bagging"],
    },
    {
      images: [
        "assets/images/membrane_testing3.jpg",
        "assets/images/membrane_testing.jpg",
        "assets/images/membrane_testing2.jpg",
        "assets/images/membranetesting.jpg",
      ],
      tag: "Robotics Research",
      date: "2024–2025",
      title: "Membrane Testing",
      description:
        "Built Arduino pneumatic test rig with ML-guided experiment selection. Reduced experiment runtime from 1.5 hours to 30 minutes — 3× more experiments per session.",
      details: [
        "Conducted soft robotics research in Penn's GRASP Lab (ModLab), developing silicone soft-actuated membranes with stabilizing regions.",
        "Fabricated and tested the membranes on a custom Arduino-based pneumatic test rig to quantify how stabilizing different regions changes force output at a given internal pressure.",
        "Working toward using an array of these membranes to vary force output at a given pressure — for example, placed under healthcare patients to relieve pressure on the body while lying down.",
        "Wrote ML-guided experiment selection in Python to prioritize the most informative geometry to test next, cutting runtime from 1.5 hours to 30 minutes for roughly 3x more experiments per session.",
      ],
      tools: ["Arduino", "Actuators"],
    },
    {
      images: [
        "assets/images/steeringwheel2.png",
        "assets/images/steeringwheel.png",
        "assets/images/steeringwheel (2).png",
      ],
      tag: "Penn Electric Racing",
      date: "2024–2025",
      title: "Steering Wheel",
      description:
        "Carbon fiber-foam sandwich plate selected via Ashby chart. 3D-printed ergonomic grips fit to drivers; quick-release integration with full-car FEA validation.",
      details: [
        "Owned the steering wheel design as a rookie project for the team's 2024 season vehicle.",
        "Used FEA to evaluate material options and selected a carbon fiber-foam sandwich for the center plate, balancing strength against driver loads with low weight.",
        "Iteratively 3D-printed ergonomic grips fit to the drivers' hands.",
        "Designed a front-and-back bearing plate to mount the quick-release, and validated the full assembly with full-car FEA.",
      ],
      tools: ["SolidWorks", "FEA", "Carbon Fiber Manufacturing"],
    },
  ],
};
