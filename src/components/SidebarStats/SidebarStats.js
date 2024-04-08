import React from "react";
import "./SidebarStats.css"; // Import CSS file for styling

const SidebarStats = () => {
  // Dummy horse names
  const horseNames = [
    "Thunderbolt",
    "Midnight Rider",
    "Golden Hoof",
    "Silver Streak",
    "Rapid Runner",
    "Speedy Gallop",
    "Swift Mane",
    "Blaze",
  ];

  // Image URLs for horse placeholders
  const horseImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoqNyQ64kBwodRyjSIiLgPXnIf_S8WNLjl4DCzSQghA&s",
    "https://www.bettingoffers.org.uk/wp-content/uploads/Horse-Isolated-Against-White-Background-400px-300x200.jpg",
    "https://image.shutterstock.com/image-photo/image-260nw-2267454903.jpg",
    "https://img.freepik.com/premium-photo/horse-racing-actionhd-8k-wallpaper-stock-photographic-image_853645-61018.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV06w8UkooeVNxMmdsiBk-zzzms0yPD86tG0EBQXAMEA&s",
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Horseracing_Churchill_Downs.jpg",
    "https://cdn-images.bloodhorse.com/i/bloodhorse-images/2022/03/13969bd2470d462fb9b13eef8bd3f574.jpg?preset=sh",
  ];

  return (
    <div className="sidebar" style={{ width: "85%" }}>
      {" "}
      {/* Adjust width of the sidebar */}
      {/* User profile section */}
      <div className="user-profile">
        <a className="nav-link" href="#/admin/user">
          <img
            src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
            className="user-image"
          />
          <p>John Doe</p>
        </a>
      </div>
      {/* Divider line */}
      <hr className="divider" />
      {/* Tournaments played section */}
      <h3 className="lime-h3">Tournaments Played</h3>
      <table className="racing-results-table">
        <tbody>
          {horseNames.map((horse, index) => (
            <tr key={index}>
              <td>
                <img
                  src={horseImages[index % horseImages.length]} // Cycling through horse images
                  alt="Horse Placeholder"
                  className="horse-image"
                  style={{
                    width: "65px",
                    height: "60px",
                    borderRadius: "20px",
                  }}
                />
              </td>{" "}
              {/* Image placeholder for horse */}
              <td>{horse}</td> {/* Horse name */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SidebarStats;
