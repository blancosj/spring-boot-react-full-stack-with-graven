import ch.qos.logback.classic.AsyncAppender

statusListener( OnConsoleStatusListener );

def LOG_PATH="logs"
def LOG_ARCHIVE="${LOG_PATH}/archive"

String sPattern = "%-5level %-6relative %msg%n"

appender("CONSOLE", ConsoleAppender) {
    encoder(PatternLayoutEncoder) {
        pattern = sPattern
    }
}

appender("ROLLING", RollingFileAppender) {
    file = "${LOG_PATH}/reactor.log"
    rollingPolicy(TimeBasedRollingPolicy) {
        fileNamePattern = "${LOG_ARCHIVE}/rollingfile.log%d{yyyy-MM-dd}.log"
        maxHistory = 30
        totalSizeCap = "1KB"
    }
    encoder(PatternLayoutEncoder) {
        pattern = sPattern
    }
}
appender("ASYNC", AsyncAppender) {
    appenderRef("ROLLING")
}

root(DEBUG, ["CONSOLE", "ASYNC"])