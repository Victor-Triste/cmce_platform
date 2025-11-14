<template>
    <div class="flex min-h-screen p-4 sm:p-6 lg:p-8">
        <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            <aside class="w-full lg:w-1/4 xl:w-1/5">
                <nav class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 h-full">
                    <ul class="space-y-2">
                        <li>
                            <a class="flex items-center p-3 rounded-lg bg-primary text-white" href="#">
                                <span class="material-symbols-outlined mr-4">emergency_home</span>
                                <span class="font-medium">Urgencias</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                href="#">
                                <span class="material-symbols-outlined mr-4 text-sky-500">favorite</span>
                                <span>Cardiogram</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                href="#">
                                <span class="material-symbols-outlined mr-4 text-sky-500">local_hospital</span>
                                <span>Hospitalización</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                href="#">
                                <span class="material-symbols-outlined mr-4 text-sky-500">radiology</span>
                                <span>Terapia intensiva</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                href="#">
                                <span class="material-symbols-outlined mr-4 text-sky-500">medication</span>
                                <span>Medicina interna</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                href="#">
                                <span class="material-symbols-outlined mr-4 text-sky-500">water_drop</span>
                                <span>Urología</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main class="w-full lg:w-3/4 xl:w-4/5">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    <img alt="Doctor taking the pulse of a pregnant patient"
                        class="w-full h-auto object-cover max-h-[400px]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0WoUlHK25FgVsHd5xblWxCXiY6Q_PJHJ2b1iNwu7NwC0x5sP6fvNAN6cj_LppZAc2aVG-m7DHI85Y4sy7ON1-Wu3k6vebFBO63DwY7sufeYtbo4QfV_RAbN6Q_ryX3QJ5RsREWdumvuCMN_Q-Xg5dGX9LLnCWSX1JFuYCMpIq2-G5AZL0LaJTjPpnVXKP_oUx4t7YnXhf4SEzvEchgtW64Iv_8eLPS44ZJyP0d6DYKKWT9rIqgmxV_ka21OiG9tAr3ILgYx2pbIZm" />
                    <div class="p-6 md:p-8 lg:p-12">
                        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-6">Lorem ipsum dolor sit amet</h1>
                        <div
                            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 mb-8 text-gray-700 dark:text-gray-300">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-sky-500 rounded-full mr-3 shrink-0"></span>
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-sky-500 rounded-full mr-3 shrink-0"></span>
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-sky-500 rounded-full mr-3 shrink-0"></span>
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-sky-500 rounded-full mr-3 shrink-0"></span>
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-sky-500 rounded-full mr-3 shrink-0"></span>
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-sky-500 rounded-full mr-3 shrink-0"></span>
                                <span>Lorem ipsum dolor</span>
                            </div>
                        </div>
                        <div class="prose max-w-none text-gray-600 dark:text-gray-400">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
                                tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis
                                vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque.
                                Convallis felis vitae tortor augue. Velit nascetur proin massa in.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>