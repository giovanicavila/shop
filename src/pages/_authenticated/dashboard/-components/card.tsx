import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type DashboardCardProps = {
	title: string;
	description: string;
	percentage: string;
	percentageText: string;
};

export function DashboardCard({
	title,
	description,
	percentage,
	percentageText,
}: DashboardCardProps) {
	const isNegativePercentage = percentage.startsWith("-");
	return (
		<Card className="min-w-[200px] flex-1">
			<CardHeader>
				<CardTitle className="text-muted-foreground">{title}</CardTitle>
				<CardDescription className="mt-2 font-semibold text-2xl text-foreground tracking-tight">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 text-muted-foreground text-sm">
					<p
						className={isNegativePercentage ? "text-red-500" : "text-green-500"}
					>
						{percentage}{" "}
					</p>
					<p>{percentageText}</p>
				</div>
			</CardContent>
		</Card>
	);
}
