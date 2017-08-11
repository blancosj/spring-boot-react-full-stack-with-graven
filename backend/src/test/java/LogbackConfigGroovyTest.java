import org.junit.Ignore;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogbackConfigGroovyTest {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Test
    @Ignore
    public void testPerformTask() throws Exception {
        for (int x = 0; x < 50; x++) {
            logger.debug("test {}", x);
        }
    }
}
