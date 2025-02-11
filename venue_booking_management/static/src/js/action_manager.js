/** @odoo-module */
import { registry } from "@web/core/registry";
import { download } from "@web/core/network/download";
import { BlockUI } from "@web/core/ui/block_ui";
// This function is responsible for generating and downloading an XLSX report.
registry.category("ir.actions.report handlers").add("xlsx_handler", async (action) => {
    if (action.report_type === 'xlsx') {
        const blockUI = new BlockUI();
        await download({
            url: '/venue_xlsx_reports',
            data: action.data,
            complete: () => unblockUI,
            error: (error) => self.call('crash_manager', 'rpc_error', error),
        });
    }
});
