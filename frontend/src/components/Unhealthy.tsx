import { Page } from "src/components";

export function Unhealthy() {
	return (
		<Page className="page-center">
			<div className="container-tight py-4">
				<div className="empty">
					<div className="empty-img">
						<img src="/images/unhealthy.svg" alt="" />
					</div>
					<p className="empty-title">API 状态异常。</p>
					<p className="empty-subtitle text-secondary">我们会持续检查，请稍后再试。</p>
				</div>
			</div>
		</Page>
	);
}
