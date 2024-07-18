export async function isServerOnline() {
    try {
      const response = await fetch('http://localhost:5000/');
      return response.ok;
    } catch (error) {
      return false;
    }
  }