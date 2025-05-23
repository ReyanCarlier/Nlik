import { Skeleton } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/earn")({
	component: Earn,
});

const KilnWidget = ({ slug }: { slug: string }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Skeleton loading={isLoading} height="full" borderRadius="1rem">
			<iframe
				src={`https://${slug}.widget${import.meta.env.DEV && ".testnet"}.kiln.fi`}
				title="Nlik Widget"
				allow="clipboard-write"
				style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
				onLoad={() => setIsLoading(false)}
			/>
		</Skeleton>
	);
};

function Earn() {
	return <KilnWidget slug="nlik" />;
}
