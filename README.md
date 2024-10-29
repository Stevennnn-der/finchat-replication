<h1>🚀 FinChat - Replication</h1>

<p>Welcome! This is my attempt at recreating the sleek FinChat website, powered by Next.js and styled with Tailwind CSS. It’s a blend of snappy animations, responsive design, and some fun with TypeScript.</p>
<img width="1178" alt="image" src="https://github.com/user-attachments/assets/a6d8aed5-79b2-453e-b9f8-2f5074e6007c">


<h2>🛠️ Project Overview</h2> <p>This project is a replication of the <a href="https://finchat.io" target="_blank">FinChat.io</a> website, built from scratch using Next.js for its powerful server-side rendering capabilities and Tailwind CSS for rapid and responsive styling. The goal was to closely mirror the original site’s design and interactivity, focusing on smooth animations, clean layout, and a modern user experience.</p>

<p>Get a sneak peek at FinChat’s interface and see how I organized its structure and components.</p>

<h2>✨ Key Technical Features</h2>
<ol>
  <li>
    <strong>Smooth UI Transitions and Animations</strong>
    <ul>
      <li>Scroll-triggered animations make the page come alive as you move down the page. Tailwind CSS + React hooks = magic!</li>
      <li>Dynamic transitions between sections, adding a polished, almost app-like experience.</li>
      <li>Sliding Footer: It appears as you scroll to the bottom, thanks to some smooth transitions and conditional rendering.</li>
    </ul>
  </li>
  
  
  <li>
    <strong>Responsive Layout with Tailwind CSS</strong>
    <ul>
      <li>Built to look good on any screen. Used Tailwind’s utility classes to make spacing, padding, and layout adjustments a breeze.</li>
      <li>All layouts are optimized to ensure consistency on mobile, tablet, and desktop without breaking a sweat.</li>
    </ul>
  </li>

  <li>
    <strong>Interactive Toggle</strong>
    <ul>
      <li>Toggle Component for switching between "ON" and "OFF" with smooth animations.</li>
       <img width="1119" alt="image" src="https://github.com/user-attachments/assets/ca762402-66cf-4333-84d8-62ac86fa929d">
    </ul>
  </li>

  
  <li>
    <strong>Advanced Component Architecture</strong>
    <ul>
      <li>Organized with reusable components, keeping everything modular so updates and scaling are straightforward.</li>
      <li>Each component has isolated styles and manages its own state, making it easy to tinker with individual parts without affecting the whole site.</li>
    </ul>
  </li>


  <li>
    <strong>Next.js Image Optimization</strong>
    <ul>
      <li>Next.js Image Optimization is in action, making sure images load fast and look crisp across devices.</li>
      <li>Configured <code>next.config.js</code> to allow specific domains for external images, adding both security and speed.</li>
      <pre>
        <code>
const nextConfig = {
    reactStrictMode: true,
    Images: {
        remotePatterns: [
          {
             protocol: 'https',
             hostname: 'finchat.io',
             port: '',
             pathname: '/_next/image/**',
          },
        ],
      },
  };
        </code>
      </pre>
    </ul>
    
  </li>
</ol>

<h3>📦Logo Scroll Component</h3>
<p>Use Tailwind CSS to create an animation that displays the logos in an infinite loop at a constant speed.</p>
<img width="1263" alt="image" src="https://github.com/user-attachments/assets/f64a58ab-3dd4-40fc-8cf3-886c152ac35d">
<img width="1232" alt="image" src="https://github.com/user-attachments/assets/e6d7a874-c666-43f8-9f6e-34070b2dae6c">


<h3>🔹 Fin Chart Comparision Component</h3>
<p>Utilize the Bar component from the react-chartjs-2 library to create vibrant and elegant graphs, using the drawImage method to add icons for each AI tool.</p>
<img width="734" alt="image" src="https://github.com/user-attachments/assets/5ea82aec-01fd-4c2d-8725-acd6ba98fd47">

<hr />

<h3>🔹 Fundenmental Research Component</h3>
<p> Add animations for a chat-like experience, with text appearing in a typewriter effect and bar graphs growing with smooth, visually appealing animations</p>
<img width="1431" alt="image" src="https://github.com/user-attachments/assets/9bebe6d8-7c1e-4349-979c-3cab180def55">

<p>Each of these components leverages Tailwind CSS for styling and animation. This setup makes them easy to adjust and integrate into different sections of the project as needed.</p>

<h4>Note:</h4>
<p>Remember to configure Tailwind in your <code>tailwind.config.js</code> file to support custom colors, shadows, or animations as required by your design.</p>


<h2>🌐 Deployment</h2>

  <strong>Vercel:</strong>  Deploy the project on Vercel, a platform designed for seamless publishing of Next.js applications with built-in optimization and ease of deployment..


<h2>📝 License</h2>
<p>This project is open-sourced under the MIT License. Feel free to use, modify, and share!</p>

<h2>📬 Contact</h2>
<p>Questions, suggestions, or just want to connect? Reach me at <a href="mailto:h26zhu@uwaterloo.ca">h26zhu@uwaterloo.ca</a>.</p>
