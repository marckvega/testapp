window.Application1 = window.Application1 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        navigationType: Application1.config.navigationType,
        navigation: Application1.config.navigation
    });
    Application1.app.router.register(":view/:id", { view: "home", id: undefined });

    Application1.app.navigate();
});
