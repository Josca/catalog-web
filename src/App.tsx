import React from "react";

const operators = [
    { name: "Database Operator", description: "Manages database deployments." },
    { name: "Monitoring Operator", description: "Handles monitoring and alerting." },
    { name: "Storage Operator", description: "Manages persistent storage solutions." },
    { name: "Security Operator", description: "Ensures secure deployments." }
];

const App = () => {
    const [search, setSearch] = React.useState("");
    const [filteredOperators, setFilteredOperators] = React.useState(operators);

    React.useEffect(() => {
        setFilteredOperators(
            operators.filter(op => op.name.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search]);

    return (
        <div style={{ textAlign: "center", backgroundColor: "#f8f9fa", padding: "20px" }}>
            <h1>OperatorHub Clone</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for an operator..."
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
                {filteredOperators.map((operator, index) => (
                    <div key={index} className="operator-card">
                        <h3>{operator.name}</h3>
                        <p>{operator.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App
