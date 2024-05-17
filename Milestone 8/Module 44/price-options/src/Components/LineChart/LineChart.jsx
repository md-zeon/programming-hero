import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { id: 1, name: "Alice", marks: 85 },
        { id: 2, name: "Bob", marks: 78 },
        { id: 3, name: "Charlie", marks: 92 },
        { id: 4, name: "David", marks: 88 },
        { id: 5, name: "Eve", marks: 95 },
        { id: 6, name: "Frank", marks: 80 },
        { id: 7, name: "Grace", marks: 84 },
        { id: 8, name: "Hannah", marks: 90 },
        { id: 9, name: "Ivy", marks: 76 },
        { id: 10, name: "Jack", marks: 89 }
      ];

    return (
        <div>
            <LChart width={600} height={400} data={mathMarksData} >
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="marks"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;