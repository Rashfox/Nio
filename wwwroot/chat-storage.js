window.chatStorage = {
    key: "ollama-chat-sessions",
    load: function () {
        const value = localStorage.getItem(this.key) || localStorage.getItem("ollama-chat-history");
        if (!value) return [];

        const parsed = JSON.parse(value);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].messages) return parsed;

        // Migrate the previous single-conversation format into one named session.
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].role) {
            return [{ id: crypto.randomUUID(), title: parsed[0].content.slice(0, 42), updatedAt: new Date().toISOString(), messages: parsed }];
        }

        return [];
    },
    save: function (sessions) {
        localStorage.setItem(this.key, JSON.stringify(sessions));
    },
    clear: function () {
        localStorage.removeItem(this.key);
    },
    scrollToLatest: function (element) {
        if (element) element.scrollTop = element.scrollHeight;
    }
};