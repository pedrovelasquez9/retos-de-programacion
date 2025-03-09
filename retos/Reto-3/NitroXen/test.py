from unittest import TestCase
import transformer


class TestTransformer(TestCase):
    def test_transformer(self):
        self.assertEqual(transformer.transformer(
            "hola mundo", "snake"), "hola_mundo")
        self.assertEqual(transformer.transformer(
            "hola mundo", "kebab"), "hola-mundo")
        self.assertEqual(transformer.transformer(
            "hola mundo", "pascal"), "HolaMundo")
        self.assertEqual(transformer.transformer(
            "hola mundo", "camel"), "holaMundo")
        self.assertEqual(transformer.transformer(
            "hola mundo", "random"), "conversion invalid")


if __name__ == '__main__':
    TestTransformer().test_transformer()
