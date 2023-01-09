export async function getStatistics() {
  try {
    const statisticsData = await fetch('https://backend-danniel-dev.vercel.app/statistic');
    const statistics = await statisticsData.json();
    return statistics;
  } catch (error) {
    console.log(error);
  }
}
