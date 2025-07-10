import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pale-pink via-soft-pink to-romantic-pink relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-heart-red opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Для моего любимого Ильяса 💕
          </h1>
          <div className="text-2xl text-white/90 animate-bounce-heart">
            ❤️ Ты самый лучший в мире ❤️
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Love Message */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-deep-pink mb-6 flex items-center gap-2">
                <Icon
                  name="Heart"
                  className="text-heart-red animate-bounce-heart"
                />
                Мое признание
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Мой дорогой Ильяс, у тебя самые красивые глаза на свете! Они
                  словно звезды, которые освещают мою жизнь каждый день. Твои
                  губы так нежны и прекрасны, что я мечтаю о каждом поцелуе.
                </p>
                <p>
                  Ты сам настолько прекрасен, что мое сердце замирает каждый
                  раз, когда я вижу тебя. Когда я обнимаю тебя, я просто хочу
                  заплакать от счастья! Хочу обнять тебя еще сильнее и никогда
                  не отпускать.
                </p>
                <p className="text-deep-pink font-semibold">
                  Я хочу тебя больше всего на свете и мечтаю быть только твоей!
                  💖
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden animate-fade-in">
              <CardContent className="p-0">
                <img
                  src="/img/cc6fe411-b90a-4d97-a68d-9a1c6d737e8e.jpg"
                  alt="Hello Kitty"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-deep-pink font-semibold">
                    Hello Kitty для моего котика! 🐱
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden animate-fade-in">
              <CardContent className="p-0">
                <img
                  src="/img/a9063f44-ee80-4dd3-a2b4-a3caea76613d.jpg"
                  alt="Cute Spider-Man"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-deep-pink font-semibold">
                    Милый Человек-паук для тебя! 🕷️💕
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Future Plans */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl mb-12 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-deep-pink mb-6 flex items-center gap-2">
              <Icon name="Calendar" className="text-heart-red" />
              Наши планы на будущее
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-pale-pink rounded-lg">
                <div className="text-4xl mb-2">🏠</div>
                <h3 className="font-bold text-deep-pink">Наш дом</h3>
                <p className="text-gray-700">
                  Построим уютный дом, где будем жить вместе
                </p>
              </div>
              <div className="text-center p-4 bg-pale-pink rounded-lg">
                <div className="text-4xl mb-2">✈️</div>
                <h3 className="font-bold text-deep-pink">Путешествия</h3>
                <p className="text-gray-700">Посетим все красивые места мира</p>
              </div>
              <div className="text-center p-4 bg-pale-pink rounded-lg">
                <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-deep-pink">Семья</h3>
                <p className="text-gray-700">Создадим самую счастливую семью</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cute Cats */}
        <div className="text-center mb-12">
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl inline-block animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-deep-pink mb-6">
                Мы как эти милые котики 🐱💕
              </h2>
              <img
                src="/img/f2e19a83-042c-4b4b-8a42-f73a11d543f9.jpg"
                alt="Cat couple"
                className="max-w-md mx-auto rounded-lg shadow-lg"
              />
              <p className="text-lg text-gray-700 mt-4">
                Вместе навсегда, как эти влюбленные котики!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <Button className="bg-deep-pink hover:bg-heart-red text-white text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-heart">
            <Icon name="Heart" className="mr-2" />Я тебя безумно люблю, Ильяс!
            💖
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
