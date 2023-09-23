import unity from "../videos/unity.mp4";
import unreal from "../videos/unreal.mp4";
import artwork from "../videos/artwork.mp4";

import unityLogo from "../images/services/unity.png";
import unrealLogo from "../images/services/unrealyo.png";
import mayaLogo from "../images/services/maya.jfif";

export const homeServices = [
    {
        title: "Unity Game Development",
        desc: `At GamesCraft Studio, Unity isn't just a tool; it's our canvas for crafting remarkable gaming experiences. Our team's proficiency in Unity extends to: Advanced Scripting, Performance Optimization, Asset Integration, Multiplatform Development, AR/VR Development`,
        video: unity,
        icon: unityLogo
    },
    {
        title: "Unreal Engine",
        desc: `Unreal Engine is where we unleash the full potential of cutting-edge graphics and immersive gameplay. Our mastery of Unreal Engine includes: High-Fidelity Graphics, Blueprint System, VR/AR Development, Realistic Physics, Multiplayer Integration`,
        video: unreal,
        icon: unrealLogo
    },
    {
        title: "Artwork",
        desc: `Our 3D modeling and texturing services are the foundation of creating visually appealing game assets. We specialize in: Character Modeling, Environment Modeling, Asset Optimization, High-quality Texturing`,
        video: artwork,
        icon: mayaLogo
    }
];