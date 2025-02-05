import React from "react";

const operators = [
    { name: "Dapr", description: "Dapr description." },
    { name: "Kubecost", description: "Kubecost description." },
    { name: "Ingress Nginx", description: "Ingress Nginx description." },
    { name: "ArgoCD", description: "ArgoCD description." },
    { name: "Kyverno", description: "Kyverno description." }
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
            <h1>K0rdent Catalog</h1>
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
